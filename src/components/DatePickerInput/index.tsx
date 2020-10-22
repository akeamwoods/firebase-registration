import React from "react";
import { useFormikContext, useField } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IconContainer, Input, Header, Select, Button } from "./style";
import { FaCalendar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { getMonth, getYear } from "date-fns";
import range from "lodash/range";

export const DatePickerInput = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  //@ts-ignore this is a temp hack/fix but don't want to spend loads of time on a typescript error when under time constraints...
  const [field] = useField(props);
  const years = range(1910, getYear(new Date()) + 1, 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <DatePicker
      {...field}
      {...props}
      selected={field.value ?? null}
      onChange={(val: any) => {
        setFieldValue(field.name, val);
      }}
      customInput={
        <IconContainer>
          <FaCalendar />
          <Input
            id="dateOfBirth"
            name="dateOfBirth"
            placeholder="Date Of Birth"
            type="dateOfBirth"
            autoComplete="off"
            readOnly
          ></Input>
        </IconContainer>
      }
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <Header>
          <Button
            onClick={decreaseMonth}
            disabled={prevMonthButtonDisabled}
            type="button"
          >
            <FaChevronLeft />
          </Button>
          <Select
            value={months[getMonth(date)]}
            onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
          >
            {months.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
          <Select
            value={getYear(date)}
            onChange={({ target: { value } }) => changeYear(parseInt(value))}
          >
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
          <Button
            onClick={increaseMonth}
            disabled={nextMonthButtonDisabled}
            type="button"
          >
            <FaChevronRight />
          </Button>
        </Header>
      )}
    />
  );
};
