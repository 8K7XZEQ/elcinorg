import React,{ useState } from 'react';
import './structure.scss';
import LocalStore from 'devextreme/data/local_store';
import DataSource from 'devextreme/data/data_source';

import  TreeList,{ Editing, Column, ValidationRule, Lookup,HeaderFilter,
    SearchPanel,RequiredRule,  Selection,Scrolling, Paging, Pager,} from 'devextreme-react/tree-list';
	
import {  PatternRule,  StringLengthRule} from 'devextreme-react/validator';
	
import { employees } from './cedvel';



	const allowedPageSizes = [5, 10, 20];


	function SelectedEmployee(props) {
		if(props.employee) {
        return (
            <p id="selected-employee" >
                Selected : {props.employee.name}
            </p>
			);
		}
    return null;
	};
		
	const emplast=(localStorage && localStorage.getItem('dx-data-localStore-myLocalData')) ? 
		JSON.parse(localStorage.getItem('dx-data-localStore-myLocalData')) :employees;

	const mystore= new LocalStore({
		key: "id",
        keyExpr:"id",
        parentIdExpr:"parent_id",
        data: emplast,
        name: 'myLocalData',
        immediate: true,
        // Other LocalStore properties go here
		errorHandler: (error) => {console.log(error.message); },
		onLoaded:  (result) => {localStorage.setItem('dx-data-localStore-myLocalData',JSON.stringify(result)); 
		;console.log(JSON.parse(localStorage.getItem('dx-data-localStore-myLocalData')));   }
		});	
		

	function Structure() {
	
	const namePattern = /^[^0-9]+$/;
		
	const dataSource = new DataSource({
		store:mystore,
		reshapeOnPush: true,
		});
	
		const lookupData = {
		store: JSON.parse(localStorage.getItem('dx-data-localStore-myLocalData')),
		sort: 'id'
		};
		
	const [selectedEmployee, setSelectedEmployee] = useState();
    const selectEmployee = (e) => {
        e.component.byKey(e.currentSelectedRowKeys[0]).done(employee => {
            setSelectedEmployee(employee);
        });
		};
		
	const onInitNewRow =(e)=> {e.data.id = JSON.parse(localStorage.getItem('dx-data-localStore-myLocalData')).sort((a, b) => b.id - a.id)[0].id+1;
		console.log ('e-dat',JSON.parse(localStorage.getItem('dx-data-localStore-myLocalData')));
		console.log('s0n',JSON.parse(localStorage.getItem('dx-data-localStore-myLocalData')));	}
	
	    return (
        <div className="App">
            <TreeList onSelectionChanged={selectEmployee}
                dataSource={dataSource}
                rootValue={-1}
				key="id"
                keyExpr="id"
                parentIdExpr="parent_id"
				allowColumnReordering={true}
				allowColumnResizing={true}
				showRowLines={true}
				showBorders={true}
				autoExpandAll={true}
				columnHidingEnabled={true}
				onInitNewRow={onInitNewRow}>
			<Scrolling mode="standard" />
			<Paging enabled={true} defaultPageSize={10} />
			<Pager   showPageSizeSelector={true}   allowedPageSizes={allowedPageSizes} showInfo={true} />	
			
			<Editing allowUpdating={true} allowDeleting={true} allowAdding={true} useIcons={true} mode="row" />
			 
			 <Column dataField="id" visible={false}  width={200} allowEditing={false} defaultHidingPriority={0} />
			 <Column visible={true} dataField="parent_id" caption="parent">
				<Lookup dataSource={lookupData} valueExpr="id" displayExpr="name" />
				<ValidationRule type="required" />
			</Column>
			
            <Column dataField="name" >
				 <RequiredRule message="Name is required" /> 
				 <StringLengthRule message="Name must have at least 3 symbols" min={3} />
				 <StringLengthRule message="Name must have maximum 30 symbols" max={30} />
				 <PatternRule message="Do not use digits in the Name" pattern={namePattern} />
            </Column>
				 
            <Column dataField="status"  dataType="boolean" width={200}/>

			 <HeaderFilter visible={true} />
            <SearchPanel visible={true} />
			<Selection mode="single" />
				 <Column type="adaptive" width={150} />
				 
            </TreeList>
			<SelectedEmployee employee={selectedEmployee} />
        </div>
    );
}


export default Structure;