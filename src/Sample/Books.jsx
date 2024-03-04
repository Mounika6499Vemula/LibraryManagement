import { React, useEffect, useState, useId } from "react";
import { ObjectPage, Avatar, DynamicPageHeader, DynamicPageTitle, FlexBox, Link, Label, Button, FormItem, Text, FormGroup, Bar, ObjectPageSection, ObjectPageSubSection, Form, Breadcrumbs, BreadcrumbsItem, ObjectStatus } from '@ui5/webcomponents-react';
import { Table, TableColumn, TableCell, TableRow, Toolbar, ToolbarSpacer, Icon } from '@ui5/webcomponents-react';
import { FilterBar, FilterGroupItem, MultiInput, Input, Select, Option, MultiComboBox, MultiComboBoxItem, ComboBox, ComboBoxItem, DatePicker, DateRangePicker, Title, StepInput, RatingIndicator, Token, Switch } from '@ui5/webcomponents-react';
import { Page, Dialog } from '@ui5/webcomponents-react';
import { ViewSettingsDialog, FilterItem, FilterItemOption, SortItem } from '@ui5/webcomponents-react';
import { Routes, Route, useNavigate } from "react-router-dom";
import "@ui5/webcomponents-icons/dist/add.js";
import "@ui5/webcomponents-icons/dist/delete.js";
import "@ui5/webcomponents-icons/dist/drop-down-list.js";
import "@ui5/webcomponents-icons/dist/settings.js";
import "@ui5/webcomponents-icons/dist/home.js";
import "@ui5/webcomponents-icons/dist/navigation-left-arrow.js";
import "@ui5/webcomponents-icons/dist/employee.js";

import { useLocation } from 'react-router-dom';
import { Templates } from "./BooksTemplates.jsx"

const Books = (props) => {

    const [Library, setLibrary] = useState(props.data)
    var [data, setdata] = useState(props.data);
    const location = useLocation();
    const navigate = useNavigate();
    const navBack = (e) => {
        navigate("/");
    };





    return (
        <Page
            header={<Bar startContent={<Button onClick={(e) => navBack(e)} icon="navigation-left-arrow" title="Go Home" />}><Label>Library Management System</Label></Bar>}
            style={{
                height: '500px'
            }}
        >
            <ObjectPage
                //footer={<Bar design="FloatingFooter" endContent={<><Button design="Positive">Accept</Button><Button design="Negative">Reject</Button></>} />}
                headerContent={Templates.headerBlock(Library)}
                headerContentPinnable
                headerTitle={
                    <DynamicPageTitle
                        header={Library.name}
                        actions={<><Button design="Emphasized">Edit</Button><Button>Delete</Button></>}>
                    </DynamicPageTitle>}
                image={<Avatar
                    colorScheme="Accent6"
                    icon="employee"
                    shape="Circle"
                    size="S"
                />}

                imageShapeCircle
                mode="IconTabBar"
                showHideHeaderButton
                style={{
                    height: '700px'
                }}

            >

                <ObjectPageSection

                    id="Details"
                    titleText="Details"
                >

                    <Form
                        backgroundDesign="Transparent"
                        columnsL={1}
                        columnsM={1}
                        columnsS={1}
                        columnsXL={2}
                        labelSpanL={4}
                        labelSpanM={2}
                        labelSpanS={12}
                        labelSpanXL={4}
                        style={{
                            alignItems: 'center'
                        }}

                    >

                        <FormGroup>
                            <FormItem label={<Label>Address</Label>}>
                                <Text>{Library.address}</Text>
                                {/* <Input visible="false" /> */}
                            </FormItem>
                            <FormItem label="Mobile Number">
                                <Text>{Library.mobile}</Text>
                                {/* <Input visible="false" /> */}
                            </FormItem>
                            <FormItem label="Valid From">
                                <Text>{Library.member_issue}</Text>
                                {/* <Input visible="false" /> */}
                            </FormItem>
                            <FormItem label="Valid To">
                                <Text>{Library.member_expiry}</Text>
                                {/* <Input visible="false" /> */}
                            </FormItem>



                        </FormGroup>



                    </Form>


                </ObjectPageSection>
                <ObjectPageSection
                    aria-label="Books"
                    id="Books"
                    titleText="Books"
                >
                    <Toolbar>
                        <h3>Members</h3>
                        <ToolbarSpacer />
                        <Button icon="add" design="Transparent" />

                        <Button icon="delete" design="Transparent" />

                        <Button icon="drop-down-list" design="Transparent" />




                    </Toolbar>
                    <Table mode="MultiSelect"
                        columns={<>
                            <TableColumn>
                                <Label>Book ID</Label>
                            </TableColumn>
                            <TableColumn>
                                <Label>Book Name</Label>
                            </TableColumn>
                            <TableColumn>
                                <Label>Book Author</Label>
                            </TableColumn>
                            <TableColumn>
                                <Label>Borrowed Date</Label>
                            </TableColumn>
                            <TableColumn>
                                <Label>Due Date</Label>
                            </TableColumn>
                            <TableColumn>
                                <Label>Returned Date</Label>
                            </TableColumn>
                            <TableColumn>
                                <Label>Status</Label>
                            </TableColumn>
                        </>}
                    >
                        {
                            data.books.map(
                                (book, index) => {
                                    return (
                                        <TableRow id={book.bkid} key={index}>

                                            <TableCell>
                                                <Label>
                                                    {book.bkid}
                                                </Label>
                                            </TableCell>
                                            <TableCell>
                                                <Label>
                                                    {book.book}
                                                </Label>
                                            </TableCell>
                                            <TableCell>
                                                <Label>
                                                    {book.book_author}
                                                </Label>
                                            </TableCell>
                                            <TableCell>
                                                <Label>
                                                    {book.book_issue}
                                                </Label>
                                            </TableCell>
                                            <TableCell>
                                                <Label>
                                                    {book.due_date}
                                                </Label>
                                            </TableCell>
                                            <TableCell>
                                                <Label>
                                                    {book.book_return}
                                                </Label>
                                            </TableCell>
                                            <TableCell>
                                                <Label>
                                                    {book.status}
                                                </Label>
                                            </TableCell>

                                        </TableRow>
                                    )
                                }
                            )
                        }


                    </Table>

                </ObjectPageSection>
            </ObjectPage >
        </Page>

    );
};

export default Books;