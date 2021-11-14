import React,{ useState } from 'react';
import './structure.scss';
import LocalStore from 'devextreme/data/local_store';
import DataSource from 'devextreme/data/data_source';
import  TreeList  from 'devextreme-react/tree-list';
import { employees } from './cedvel';

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
	

		
	const dataSource = new DataSource({
		store:mystore,
		reshapeOnPush: true,
		});
	
		
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

            </TreeList>
			
        </div>
    );
}


export default Structure;