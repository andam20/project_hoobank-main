
import React, { useState, useEffect } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { Slider } from 'primereact/slider';
import { Tag } from 'primereact/tag';
// import { CustomerService } from './service/CustomerService';

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";                                         

export default function CustomersDemo() {
    const [expenses, setExpenses] = useState([]);
    const [selectedCustomers, setSelectedCustomers] = useState([]);
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
        balance: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        pb: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        activity: { value: null, matchMode: FilterMatchMode.BETWEEN }
    });
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [representatives] = useState([
        { name: 'Food', image: '' },
        { name: 'feul', image: '' },
        { name: 'Mobile Card', image: '' },
        { name: 'Car Service', image: '' },
        { name: 'Travel', image: '' },
        { name: 'Transportation', image: '' },
        { name: 'Health Care', image: '' },
        { name: 'Gift', image: '' },
        { name: 'Education', image: '' },
        { name: 'Other', image: '' }
    ]);
    const [statuses] = useState(['Accepted', 'Pending', 'Rejected']);

    const getSeverity = (status) => {
        switch (status) {
            case 'Rejected':
                return 'danger';

            case 'Accepted':
                return 'success';

            case 'Pending':
                return 'warning';

        }
    };

    const [payedBack] = useState(['Paid Back', 'Not Paid Back']);

    const getSeverity2 = (pb) => {
        switch (pb) {
            case 'Not Paid Back':
                return 'danger';

            case 'Paid Back':
                return 'success';

        }
    };



    // useEffect(() => {
    //     CustomerService.getCustomersLarge().then((data) => setCustomers(getCustomers(data)));
    // }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(()=>{
        fetch('http://192.168.1.92/collage-project/public/api/expense')
            .then(response => response.json())
            .then(json => setExpenses(json))
            .catch(e=>console.log(e))
    },[])

    console.log(expenses)
    



    const getExpenses = (sayd) => {
        return [...(sayd || [])].map((d) => {
            d.date = new Date(d.date);

            return d;
        });
    };


    const formatDate = (value) => {
        // return value.toLocaleDateString('en-US', {
        //     day: '2-digit',
        //     month: '2-digit',
        //     year: 'numeric'
        // });
        return value;
    };

    const formatCurrency = (value) => {
        // return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        return value;
    };

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const renderHeader = () => {
        return (
            <div className="flex flex-wrap gap-2 justify-content-between align-items-center">
                <h4 className="m-0">Expenses</h4>
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        );
    };

    const countryBodyTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt="flag" src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`flag flag-${rowData.country.code}`} style={{ width: '24px' }} />
                <span>{rowData.country.name}</span>
            </div>
        );
    };

    const representativeBodyTemplate = (rowData) => {
        const representative = rowData.representative;

        return (
            <div className="flex align-items-center gap-2">
                {/* <img alt={representative.name} src={`https://primefaces.org/cdn/primereact/images/avatar/${representative.image}`} width="32" /> */}
                <span>{representative}</span>
            </div>
        );
    };

    const representativeFilterTemplate = (options) => {
        return (
            <React.Fragment>
                <div className="mb-3 font-bold">Category Picker</div>
                <MultiSelect value={options.value} options={representatives} itemTemplate={representativesItemTemplate} onChange={(e) => options.filterCallback(e.value)} optionLabel="name" placeholder="Any" className="p-column-filter" />
            </React.Fragment>
        );
    };

    const representativesItemTemplate = (option) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={option.name} src={`https://primefaces.org/cdn/primereact/images/avatar/${option.image}`} width="32" />
                <span>{option.name}</span>
            </div>
        );
    };

    const dateBodyTemplate = (rowData) => {
        return formatDate(rowData.date);
    };

    const dateFilterTemplate = (options) => {
        return <Calendar value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" mask="99/99/9999" />;
    };

    const balanceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.ammount);
    };

    const balanceFilterTemplate = (options) => {
        return <InputNumber value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} mode="currency" currency="USD" locale="en-US" />;
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
    };

    const statusFilterTemplate = (options) => {
        return <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterCallback(e.value, options.index)} itemTemplate={statusItemTemplate} placeholder="Select One" className="p-column-filter" showClear />;
    };

    const statusItemTemplate = (option) => {
        return <Tag value={option} severity={getSeverity(option)} />;
    };

    const pbBodyTemplate = (rowData) => {
        return <Tag value={rowData.status} severity={getSeverity2(rowData.status)} />;
    };

    const pbFilterTemplate = (options) => {
        return <Dropdown value={options.value} options={paid_back} onChange={(e) => options.filterCallback(e.value, options.index)} itemTemplate={pbItemTemplate} placeholder="Select One" className="p-column-filter" showClear />;
    };

    const pbItemTemplate = (option) => {
        return <Tag value={option} severity={getSeverity2(option)} />;
    };


    const actionBodyTemplate = () => {
        return <Button type="button" icon="pi pi-cog" rounded></Button>;
    };

    const header = renderHeader();

    return (
        <div className="card">
            <DataTable value={expenses} paginator header={header} rows={10}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    rowsPerPageOptions={[10, 25, 50]} dataKey="id" selectionMode="checkbox" selection={selectedCustomers} onSelectionChange={(e) => setSelectedCustomers(e.value)}
                    filters={filters} filterDisplay="menu" globalFilterFields={['category','description','balance', 'status','paid_back','created_at']}
                    emptyMessage="No Expenses Found." currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries">
                <Column field='category' header="Category" sortable sortField="representative.name" filterField="representative" showFilterMatchModes={false} filterMenuStyle={{ width: '14rem' }}
                    style={{ minWidth: '14rem' }} body={representativeBodyTemplate} filter filterElement={representativeFilterTemplate} />
                <Column field="description" header="Description" sortable filter filterPlaceholder="Search by name" style={{ minWidth: '14rem' }} />
                <Column field="balance" header="Ammount" sortable dataType="numeric" style={{ minWidth: '12rem' }} body={balanceBodyTemplate} filter filterElement={balanceFilterTemplate} />
                <Column field="status" header="Status" sortable filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} filter filterElement={statusFilterTemplate} />
                <Column field="paid_back" header="Paid Back?" sortable filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={pbBodyTemplate} filter filterElement={pbFilterTemplate} />                
                <Column field="created_at" header="Date" sortable filterField="date" dataType="date" style={{ minWidth: '12rem' }} body={dateBodyTemplate} filter filterElement={dateFilterTemplate} />
                {/* <Column headerStyle={{ width: '5rem', textAlign: 'center' }} bodyStyle={{ textAlign: 'center', overflow: 'visible' }} body={actionBodyTemplate} /> */}
            </DataTable>         
        </div>
    );
}
        