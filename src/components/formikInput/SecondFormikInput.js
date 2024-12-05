// import React from "react";
// import { Input } from "@material-tailwind/react";
// import { Field, useField } from "formik";
// import PropTypes from "prop-types";

// const SecondFormikInput = (props) => {
//   const [field, meta] = useField(props.name);

//   return (
//     <div className="w-full">
//       <Field
//         as={Input}
//         name={props.name}
//         label={props.label}
//         type={props.type || "text"}
//         value={field.value ?? ""}
//         onChange={field.onChange}
//         onBlur={field.onBlur}
//         error={meta.touched && Boolean(meta.error)}
//         success={!meta.error && meta.touched}
//         color={meta.error && meta.touched ? "red" : "green"}
//       />
//       {meta.touched && meta.error && (
//         <p className="text-red-500 text-sm mt-1">{meta.error}</p>
//       )}
//     </div>
//   );
// };

// SecondFormikInput.propTypes = {
//   label: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   type: PropTypes.string,
// };

// export default SecondFormikInput;
