import React from "react";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

function AppFormPicker({ name, items, placeholder, ...otherProps }) {
  const { setFieldValue, errors, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        placeholder={placeholder}
        items={items}
        selectedItem={values[name]}
        onSelectItem={(item) => {
          setFieldValue(name, item, true);
          console.log("this is the item label : " + item.label + values[name]);
        }}
        {...otherProps}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
}

export default AppFormPicker;
