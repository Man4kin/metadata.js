/**
 * ### модификатор метод columns() справочника scheme_settings - добавляет форматтеры и редакторы
 *
 * @module rx_columns
 *
 * Created 10.01.2017
 */

import React, {Component} from "react";
import PropTypes from 'prop-types';
import DataCell from "../DataField/DataCell";
import FieldPathCell from "../DataField/FieldPathCell";
import {Formatters} from "../react-data-grid/react-data-grid-addons";

const DropDownFormatter = Formatters.DropDownFormatter;


function rx_columns($p) {

  const {moment} = $p.utils;

  const date_formatter = {
    date: (v) => {
      const {presentation} = moment(v).format(moment._masks.date);
      return <div title={presentation}>{presentation}</div>
    },
    date_time: (v) => {
      const {presentation} = moment(v).format(moment._masks.date_time);
      return <div title={presentation}>{presentation}</div>
    }
  }

  const presentation_formatter = (v) => {
    const {presentation} = v.value
    return <div title={presentation}>{presentation}</div>
  }

  return function columns({mode, fields, _obj}) {

    const res = this.columns(mode);

    if (fields) {
      res.forEach((column) => {

        const _fld = fields[column.key]

        if (!column.formatter) {

          if (_fld.type.is_ref) {
            column.formatter = presentation_formatter
          }
          else if (_fld.type.date_part) {
            column.formatter = date_formatter[_fld.type.date_part]
          }
        }

        switch (column.ctrl_type) {

          case 'input':
            column.editable = true;
            break;

          case 'ocombo':
            column.editor = <DataCell />;
            break;

          case 'ofields':
            column.editor = <FieldPathCell />
            column.formatter = <DropDownFormatter options={_obj.used_fields_list()}/>
            break;

          case 'dhxCalendar':
            column.editor = <DataCell />;
            break;

          default:
            ;
        }

      })
    }

    return res;
  }
}

