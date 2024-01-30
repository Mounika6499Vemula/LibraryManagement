import { React, useEffect, useState, useId } from "react";
import { ObjectPage, Avatar, DynamicPageHeader, DynamicPageTitle, FlexBox, Link, Label, Button, FormItem, Text, FormGroup, Bar, ObjectPageSection, ObjectPageSubSection, Form, Breadcrumbs, BreadcrumbsItem, ObjectStatus } from '@ui5/webcomponents-react';
import { Table, TableColumn, TableCell, TableRow, Toolbar, ToolbarSpacer, Icon } from '@ui5/webcomponents-react';
import { FilterBar, FilterGroupItem, MultiInput, Input, Select, Option, MultiComboBox, MultiComboBoxItem, ComboBox, ComboBoxItem, DatePicker, DateRangePicker, Title, StepInput, RatingIndicator, Token, Switch } from '@ui5/webcomponents-react';
import { Page, Dialog } from '@ui5/webcomponents-react';
import { Routes, Route, useNavigate } from "react-router-dom";
import "@ui5/webcomponents-icons/dist/add.js";
import "@ui5/webcomponents-icons/dist/delete.js";
import "@ui5/webcomponents-icons/dist/drop-down-list.js";
import "@ui5/webcomponents-icons/dist/settings.js";
import "@ui5/webcomponents-icons/dist/home.js";
import "@ui5/webcomponents-icons/dist/navigation-left-arrow.js";
import "@ui5/webcomponents-icons/dist/employee.js";
import "@ui5/webcomponents-icons/dist/account.js";
import "@ui5/webcomponents-icons/dist/thing-type.js";
import "@ui5/webcomponents-icons/dist/outgoing-call.js";
import "@ui5/webcomponents-icons/dist/addresses.js";

import obj from "./data.json";
import { useLocation } from 'react-router-dom';

export const Templates = {

    headerBlock: (lib) => {
        let data = [
            {
                icon: "account",
                name: lib.name
            }, {
                icon: "thing-type",
                name: lib.mobile
            }, {
                icon: "outgoing-call",
                name: lib.memberType
            },
            {
                icon: "addresses",
                name: lib.address
            }];
        return (
            <DynamicPageHeader>
                <FlexBox wrap="Wrap">

                    <FlexBox direction="Column">
                        <Title>
                            Member Information
                        </Title>
                        {data.map(obj =>
                        (
                            <FlexBox justifyContent="SpaceBetween" style={{ margin: "5px 0" }}>
                                <Icon style={{ width: "10%" }} name={obj.icon} />
                                <Label style={{ width: "88%",textAlign:"left" }}>{obj.name}</Label>
                            </FlexBox>
                        )
                        )
                        }
                        {/* <FlexBox alignItems="Center" wrap="Wrap">
                            <Icon name="employee" />
                            <Label> {lib.mobile}</Label>
                        </FlexBox>
                        <FlexBox alignItems="Center" wrap="Wrap">
                            <Icon name="employee" />
                            <Label> {lib.memberType}</Label>
                        </FlexBox>
                        <FlexBox alignItems="Center" wrap="Wrap">
                            <Icon name="employee" />
                            <Label>{lib.address}</Label>
                        </FlexBox> */}
                    </FlexBox>

                </FlexBox>
            </DynamicPageHeader>
        );
    }

};

