import { React, useEffect, useState, useRef, useId } from "react";
import { ObjectPage, DynamicPageHeader, DynamicPageTitle, FlexBox, Link, Label, Button, FormItem, Text, FormGroup, Bar, ObjectPageSection, ObjectPageSubSection, Form, Breadcrumbs, BreadcrumbsItem, ObjectStatus } from '@ui5/webcomponents-react';
import { Table, TableColumn, TableCell, TableRow, Toolbar, ToolbarSpacer, Icon } from '@ui5/webcomponents-react';
import { FilterBar, FilterGroupItem, MultiInput, Input, Select, Option, MultiComboBox, MultiComboBoxItem, ComboBox, ComboBoxItem, DatePicker, DateRangePicker, Title, StepInput, RatingIndicator, Token, Switch } from '@ui5/webcomponents-react';
import { Dialog } from '@ui5/webcomponents-react';
import { ViewSettingsDialog, FilterItem, FilterItemOption, SortItem } from '@ui5/webcomponents-react';
import { Routes, Route, useNavigate, useContext } from "react-router-dom";
import { DialogComponent } from './DialogComponent.jsx';
import { createPortal } from 'react-dom';
import "@ui5/webcomponents-icons/dist/add.js";
import "@ui5/webcomponents-icons/dist/delete.js";
import "@ui5/webcomponents-icons/dist/drop-down-list.js";
import "@ui5/webcomponents-icons/dist/settings.js";
import obj from "./data.json";
import Books from './Books';
// import PagesData from '../context/ElementProperties';

const Objectpage = (props) => {
  // const libararyContext = useContext(PagesData);
  const filterOptions = [
    { id: '', label: '' },
    { id: 'Lecturer', label: 'Lecturer' },
    { id: 'Professor', label: 'Professor' },
    { id: 'Student', label: 'Student' }
  ];
  const sidebarContentEl = document.getElementById('sidebar-content');
  //const id = useId();
  const { Library } = obj;
  var [data, setdata] = useState(Library);
  const dialogRef = useRef(null);
  const [open, setOpen] = useState({
    flag: false,
    type: ""
  });
  // const [open, setOpen] = useState(false);
  const [rowInfo, setRowInfo] = useState(null);
  let defaultParams = {
    member_id: "id-1657605869450-" + JSON.stringify(data.length + 1),
    name: "",
    memberType: ""
  }
  const [rowInput, setRowInput] = useState(defaultParams);

  const onSelectChange = (e, changetype) => {
    let value;
    value = e.currentTarget.value;
    if (changetype === 'memberType') {
      value = e.detail.selectedOption.dataset.id;
    }
    //if (value) {
    if (value === "") {
      setdata(Library);
    } else {
      //setdata(Library);
      let fliteredData = Library.filter(obj => obj[changetype].toLowerCase().includes(value.toLowerCase()));
      setdata(fliteredData);
    }
    //}


    // alert("something");
  };
  const deleteDetails = (e) => {
    //var arrayCopy;
    var selectedRows = e.target.parentElement.parentElement.parentElement.parentElement.children[1].selectedRows;
    if (selectedRows.length === 0) {
      alert('Please select a row');
    }
    else {
      for (var i = selectedRows.length - 1; i >= 0; i--) {
        // if (selectedRows[i].selected == true) {
        //   Library.slice(i);
        //   selectedRows[i].selected = false;
        //   setdata(Library);
        // }
        data = data.filter((row) => row.member_id !== selectedRows[i].id);
        //arrayCopy = data.splice(selectedRows[i].id, 1);
        selectedRows[i].selected = false;
        setdata(data);

      }
      //  setdata(arrayCopy);
    }

  };
  const handleClickToOpen = () => {
    // const rowsInput = {
    //   member_id: id,
    //   name: "",
    //   memberType: ""
    // }
    // setdata([...data, rowsInput])
    setRowInput(defaultParams);
    setOpen(true);
  };
  const handleClickToOpenSetting = () => {
    dialogRef.current.show();
  };
  const onPropertyChange = (e, prop) => {
    let value = e.currentTarget.value;
    if (prop === 'memberType') {
      value = e.detail.selectedOption.dataset.id;
    }
    if (value) {
      rowInput[prop] = value;
      setRowInput({ ...rowInput });
    }

  }
  const handleToOk = () => {

    if (rowInput.name !== "" && rowInput.memberType !== "") {
      setdata([...data, rowInput]);
      setRowInput(defaultParams);
      setOpen(false);
      // coursesPage();
    }
    else {
      alert("error");
    }

    // setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  const coursesPage = (e) => {
    // e.stopPropagation();
    // e.preventDefault();
    let lib = e.detail.row.id;
    props.onDataUpdate(lib)
    // pagesData.updateLibrary(lib);
    navigate("/Books");
    // window.location.href = '/Books'
  }
  const rowSelectionChange = (e) => {
    e.stopPropagation();
    e.preventDefault();
  }
  // const rowClick = (e, lib) => {
  //   setRowInfo(lib);

  // }
  return (

    <ObjectPage
      //footer={<Bar design="FloatingFooter" endContent={<><Button design="Positive">Accept</Button><Button design="Negative">Reject</Button></>} />}
      headerContent={
        <DynamicPageHeader>
          <FilterBar
            filterContainerWidth="13.125rem"

          >

            <FilterGroupItem label="Member ID">
              <Input onChange={(e) => onSelectChange(e, 'member_id')} />
            </FilterGroupItem>
            <FilterGroupItem label="Member Name">
              <Input onChange={(e) => onSelectChange(e, 'name')} />
            </FilterGroupItem>
            <FilterGroupItem
              label="Member Type"
            >
              <Select onChange={(e) => onSelectChange(e, 'memberType')}>
                {/* <Option value=""></Option> */}
                {
                  filterOptions.map(op => <Option data-id={op.id}>{op.label}</Option>)
                }
                {/* <Option value=""></Option> */}
                {/* <Option value="Lecturer">Lecturer</Option>
                <Option value="Professor"> Professor</Option>
                <Option value="Student">Student</Option> */}
              </Select>
            </FilterGroupItem>
            <FilterGroupItem label="Address">
              <Input onChange={(e) => onSelectChange(e, 'address')} />
            </FilterGroupItem>

            <FilterGroupItem
              label="Valid From"
            >
              {/* <DatePicker primaryCalendarType="Gregorian" onChange={(e) => onSelectChange(e, 'member_issue')}
                style={{
                  minWidth: 'auto'
                }}
              /> */}
            </FilterGroupItem>
            <FilterGroupItem
              label="Valid To"
            >
              {/* <DatePicker  onChange={(e) => onSelectChange(e, 'member_expiry')}
                style={{
                  minWidth: 'auto'
                }}
              /> */}
              {/* <DateRangePicker
                onChange={function _a() { }}
                onInput={function _a() { }}
                primaryCalendarType="Gregorian"
              /> */}
            </FilterGroupItem>
          </FilterBar>
        </DynamicPageHeader>
      }
      headerContentPinnable
      headerTitle={
        <DynamicPageTitle
          header="Members Data">
        </DynamicPageTitle>}
      //image="https://sap.github.io/ui5-webcomponents-react/static/media/Person.4b12bcf0.png"
      imageShapeCircle
      selectedSectionId="goals"
      showHideHeaderButton
      style={{
        height: '700px'
      }}

    >

      <ObjectPageSection
        aria-label="Personal"
        id="personal"
        titleText="Personal"
      >
        <Toolbar>
          <h3>Members</h3>
          <ToolbarSpacer />
          <Button icon="add" design="Transparent" onClick={handleClickToOpen} />
          {/* {open&&createPortal(  ,document.body)} */}
            <DialogComponent open={open} handleToOk={handleToOk} handleToClose={handleToClose} data={data} />
          
          <Button icon="delete" design="Transparent" onClick={(e) => deleteDetails(e)} />

          <Button icon="drop-down-list" design="Transparent" onClick={handleClickToOpenSetting} />
          <ViewSettingsDialog ref={dialogRef}
            filterItems={<><FilterItem text="Position" values={<><FilterItemOption text="CEO" /><FilterItemOption text="CTO" /><FilterItemOption text="CIO" /></>} /><FilterItem text="Department" values={<><FilterItemOption text="Legal" /><FilterItemOption text="Finance" /><FilterItemOption text="Development" /></>} /></>}
            onBeforeOpen={function _a() { }}
            onCancel={function _a() { }}
            onConfirm={function _a() { }}
            sortItems={<><SortItem text="Name" /><SortItem text="Position" /><SortItem text="Company" /><SortItem text="Department" /></>}
          />



        </Toolbar>
        <Table mode="MultiSelect" onRowClick={(e) => coursesPage(e)} onSelectionChange={(e) => rowSelectionChange(e)}
          columns={<>
            <TableColumn style={{ width: '12rem', alignItems: 'baseLine' }}>
              <Label>Member ID</Label>
            </TableColumn>
            <TableColumn style={{ width: '12rem' }}>
              <Label>Member Name</Label>
            </TableColumn>
            <TableColumn demandPopin style={{ width: '12rem' }} popinText="Dimensions">
              <Label>Member Type</Label>
            </TableColumn>
            <TableColumn demandPopin style={{ width: '12rem' }} popinText="Weight">
              <Label>Address</Label>
            </TableColumn>
            <TableColumn>
              <Label>Mobile Number</Label>
            </TableColumn>
            <TableColumn>
              <Label>Email</Label>
            </TableColumn>
            <TableColumn>
              <Label>Valid From</Label>
            </TableColumn>
            <TableColumn>
              <Label>Valid To</Label>
            </TableColumn></>}
        >
          {
            data.map(
              (lib, index) => {
                return (

                  <TableRow id={lib.member_id} key={index} type="Active">

                    <TableCell>
                      <Label>
                        {lib.member_id}
                      </Label>
                    </TableCell>
                    <TableCell>
                      <Label>
                        {lib.name}
                      </Label>
                    </TableCell>
                    <TableCell>
                      <Label>
                        {lib.memberType}
                      </Label>
                    </TableCell>
                    <TableCell>
                      <Label>
                        {lib.address}
                      </Label>
                    </TableCell>
                    <TableCell>
                      <Label>
                        {lib.mobile}
                      </Label>
                    </TableCell>
                    <TableCell>
                      <Label>
                        {lib.email}
                      </Label>
                    </TableCell>
                    <TableCell>
                      <Label>
                        {lib.member_issue}
                      </Label>
                    </TableCell>
                    <TableCell>
                      <Label>
                        {lib.member_expiry}
                      </Label>
                    </TableCell>
                  </TableRow>
                )

              }
            )
          }


          {/* <TableRow>
            <TableCell>
              <Label>
                Notebook Basic 17HT-1001
              </Label>
            </TableCell>
            <TableCell>
              <Label>
                Very Best Screens
              </Label>
            </TableCell>
            <TableCell>
              <Label>
                29 x 17 x 3.1cm
              </Label>
            </TableCell>
            <TableCell>
              <Label>
                4.5KG
              </Label>
            </TableCell>
            <TableCell>
              <Label>
                1249EUR
              </Label>
            </TableCell>
          </TableRow> */}
        </Table>
      </ObjectPageSection>

    </ObjectPage >
  );
};

export default Objectpage;