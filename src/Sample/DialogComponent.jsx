import { React, useEffect, useState, useRef, useId } from "react";
import { ObjectPage, DynamicPageHeader, DynamicPageTitle, FlexBox, Link, Label, Button, FormItem, Text, FormGroup, Bar, ObjectPageSection, ObjectPageSubSection, Form, Breadcrumbs, BreadcrumbsItem, ObjectStatus } from '@ui5/webcomponents-react';
import { Table, TableColumn, TableCell, TableRow, Toolbar, ToolbarSpacer, Icon } from '@ui5/webcomponents-react';
import { FilterBar, FilterGroupItem, MultiInput, Input, Select, Option, MultiComboBox, MultiComboBoxItem, ComboBox, ComboBoxItem, DatePicker, DateRangePicker, Title, StepInput, RatingIndicator, Token, Switch } from '@ui5/webcomponents-react';
import { Dialog } from '@ui5/webcomponents-react';
import { ViewSettingsDialog, FilterItem, FilterItemOption, SortItem } from '@ui5/webcomponents-react';
import { Routes, Route, useNavigate, useContext } from "react-router-dom";
import "@ui5/webcomponents-icons/dist/add.js";
import "@ui5/webcomponents-icons/dist/delete.js";
import "@ui5/webcomponents-icons/dist/drop-down-list.js";
import "@ui5/webcomponents-icons/dist/settings.js";
export function DialogComponent({ open, handleToOk, handleToClose, data }) {
  const filterOptions = [
    { id: '', label: '' },
    { id: 'Lecturer', label: 'Lecturer' },
    { id: 'Professor', label: 'Professor' },
    { id: 'Student', label: 'Student' }
  ];
  let defaultParams = {
    member_id: "id-1657605869450-" + JSON.stringify(data.length + 1),
    name: "",
    memberType: ""
  }
  const [rowInput, setRowInput] = useState(defaultParams);
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
  return (
    <div id="sidebar-content">
      <Dialog open={open}
        footer={<Bar startContent={<Button onClick={handleToOk}>Ok</Button>} endContent={<Button onClick={handleToClose}>Close</Button>} />}

        header={<Title>Adding New Record</Title>}
        headerText="Add New Member"
        style={{
          alignItems: 'center',
          padding: "20px"
        }}

      >
        {/* <Routes>
              <Route path="/Books" element={<handleToOk />} />
              
            </Routes> */}
        <Form

          style={{
            alignItems: 'center',

          }}

        >
          <FormItem label="Member Name">
            <Input value={rowInput.name} onChange={(e) => onPropertyChange(e, "name")} />
          </FormItem>
          <FormItem label="Member Type">
            <Select onChange={(e) => onPropertyChange(e, "memberType")}>

              {
                filterOptions.map(op => <Option selected={rowInput.memberType === op.label} data-id={op.id}>{op.label}</Option>)
              }

            </Select>
          </FormItem>



        </Form>
      </Dialog>
    </div>
  )
}