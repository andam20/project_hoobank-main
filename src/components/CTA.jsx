import styles from "../style";
import Tesseract from 'tesseract.js';
import { useState } from "react";


var curr = new Date();
curr.setDate(curr.getDate() + 1);
var date = curr.toISOString().substring(0,10);


const CTA = () => {



  const [text,setText]= useState("hiwaaa");
  const [image,setImage]= useState("");
  const [category,setCatogory]= useState("");
  const [date, setDate] = useState("");
  const [price,setPrice]= useState("");
  const [disc,setDisc]= useState("");
  const [lang,setLang] = useState("ara+eng+kur")
  const [isLoading,setIsLoading] = useState(false);
  const [progresses,setProgresses] = useState(0);




  
  const handleClick=(e)=>{
    setIsLoading(true);
    e.preventDefault()
      const image = e.target.files[0]
      setImage(image);
  
    Tesseract.recognize(
      image,
      lang,
      { logger: m => {
        console.log(m);
        if(m.status ==="recognizing text"){
          setProgresses(parseInt(m.progress*100))
        }
      } }
    ).then(({ data: { text } }) => {

      const textArray=text.split('\n');
      setDisc(text)

      for (let index = 0; index < textArray.length; index++) {
        const element = textArray[index].toUpperCase();
        if(element.includes("TOTAL")||element.includes("مجموع")){

          if(element.match(/\d{1,3}(,\d{3})*\.\d{2}/)!==null){
          var numb = element.match(/\d{1,3}(,\d{3})*\.\d{2}/)[0];
          setPrice(numb)
          }
          // numb = numb.join("");

        }
        
      }

      // console.log(textArray);

      setText(text);
      setIsLoading(false);
      // console.log(text);
    });
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const token = localStorage.getItem("token");
  
    fetch('http://localhost:8000/api/store-expense', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        "category" : category,
        "amount" : price,
        "date" : date,
        "description" : disc,
      })
    })
    .then(response => {
      if (response.ok) {
        console.log(response);
        window.location.reload(false);

      } else {
        throw new Error('Failed to submit form');
      }
    })
    .catch(error => {
      console.log(error);
      console.log(error.message);
    });
  };
  

  
return (
<section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>



<form onSubmit={handleSubmit}>
    <div class="mb-6">
        <label htmlFor="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
        <select data-te-select-init class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block     w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'  onChange={(e)=>setCatogory(e.target.value)} >
        <option selected disabled>Choose a category</option>
          <option
            value="Food">
            Food
          </option>
          <option
            value="Fuel">
            Fuel
          </option>
          <option
            value="Mobile Card">
            Mobile Card
          </option>
          <option
            value="Car Service">
            Car Service
          </option>
          <option
            value="Travel">
            Travel
          </option>
          <option
            value="Transportation">
            Transportation
          </option>
          <option
            value="Health Care">
            Health Care
          </option>
          <option
            value="Gift">
            Gift
          </option>
          <option
            value="Education">
            Education
          </option>
          <option
            value="Other">
            Other
          </option>
        </select>
        </div>
    <div class="mb-6">
      
        <label htmlFor="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Discription</label>
        <textarea name='test' id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  onChange={(e)=>setDisc(e.target.value)}  defaultValue={disc} placeholder="Write your discription here..."></textarea>


    </div>
    <div class="mb-6">
      
      <label htmlFor="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
      <div class="relative max-w-sm">
      <input datepicker datepicker-autohide type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  onChange={(e)=>setDate(e.target.value)}  placeholder="Today" defaultValue={date}></input>
      </div>


    </div>


    


    <div class="mb-6">
    



    <label htmlFor="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ammuont</label>


    <div class="relative">
      
    <input type="text" id="hs-input-with-leading-and-trailing-icon" name="hs-input-with-leading-and-trailing-icon" class="py-3 px-4 pr-16 block w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0000"  onChange={(e)=>setPrice(e.target.value)}  defaultValue={price}></input>
    <div class="absolute inset-y-0 right-0 flex items-center pointer-events-none z-20 pr-4">
      <span class="text-gray-500">IQD</span>
    </div>
  </div>
</div>
<div class="mb-6">
      <label htmlFor="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>

      <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" onChange={handleClick} id="file_input" type="file" accept="image/*"></input>

    </div>





    {isLoading && (
  <div className="relative pt-1">
    <div className="overflow-hidden h-2  text-xs flex rounded bg-gray-200">
      <div style={{ width: `${progresses}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-gradient"></div>
      
    </div>
    <h4 className="font-poppins font-normal xs:text-[15.89px] text-[15.89px] xs:leading-[53.16px] leading-[43.16px] text-gradient uppercase">
          {progresses}%
        </h4>
  </div>
)}
   
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>


  </section>
)
  };


export default CTA;
