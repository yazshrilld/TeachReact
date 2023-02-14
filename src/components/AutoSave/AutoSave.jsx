import {useState} from "react";
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";
import {useFormik} from "formik";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

// Change Flex to Stack and extraStyle to sx

const Form = () => {
    const getFormValuesFromLs = () => {
        const values = JSON.parse(localStorage.getItem("__formValues"))
        const {
            fullName, email, phone, address, sex, age, nokName, nokAddress, nokPhone
        } = values || {}

        return {
            fullName, email, phone, address, sex, age, nokName, nokAddress, nokPhone
        }
    }

    console.log("from get: ", getFormValuesFromLs)

    const {
        fullName, email, phone, address, sex, age, nokName, nokAddress, nokPhone
    } = getFormValuesFromLs()

    const formik = useFormik({
        initialValues: {
            fullName: fullName || "",
            email: email || "",
            phone: phone || "",
            address: address || "",
            sex: sex || "",
            age: age || "",
            nokName: nokName || "",
            nokAddress: nokAddress || "",
            nokPhone: nokPhone || ""
        }, onSubmit: (values) => {
            alert(JSON.stringify(values))
            localStorage.setItem("__step", 1)
            localStorage.removeItem("__formValues")
        }
    })

    const saveStepToLs = (step) => {
        const {
            fullName, email, phone, address, sex, age, nokName, nokAddress, nokPhone
        } = formik.values
        localStorage.setItem("__step", JSON.stringify({step}))
        localStorage.setItem("__formValues", JSON.stringify({
            fullName, email, phone, address, sex, age, nokName, nokAddress, nokPhone
        }))
        // const detail = localStorage.setItem("__formValues", JSON.stringify({
        //     fullName, email, phone, address, sex, age, nokName, nokAddress, nokPhone
        // }))
        // console.log("detail: ",detail)
    }


    const getStepFromLs = () => {
        const step = JSON.parse(localStorage.getItem("__step"))
        console.log("step: ",step)
        return step
    }

    const [activeStep, setActiveStep] = useState(getStepFromLs())

    const handleProceed = (step) => {
        saveStepToLs(step)
        setActiveStep({step})
    }

    const goBack = () => {
        const step = parseInt(getStepFromLs().step) - 1
        saveStepToLs(step)
        setActiveStep({step})
    }
    console.log(activeStep, "activeStep")
    return (
    <Box as="form" onSubmit={formik.handleSubmit}>
            {(!activeStep || activeStep?.step === 1) &&
                <Stack direction="column" spacing={2} sx={{width: 500, mx: "auto"}}>
                    <TextField fullWidth name="fullName" value={formik.values.fullName} onChange={formik.handleChange}
                               placeholder="Enter Your full name"/>

                    <TextField fullWidth name="email" value={formik.values.email} onChange={formik.handleChange}
                               placeholder="Enter Your Email"/>

                    <TextField fullWidth name="phone" value={formik.values.phone} onChange={formik.handleChange}
                               placeholder="Enter Your phone number"/>

                    <Button variant="contained" fullWidth sx={{height: 55}} type="button"
                            onClick={() => handleProceed(2)}>Proceed</Button>
                </Stack>
            }

            {
                activeStep?.step === 2 && <Stack direction="column" spacing={2} sx={{width: 500, mx: "auto"}}>
                    <TextField fullWidth onChange={formik.handleChange} name="address" value={formik.values.address}
                               placeholder="Enter Your Address"/>
                    <TextField fullWidth onChange={formik.handleChange} name="sex" value={formik.values.sex}
                               placeholder="Enter Your sex"/>
                    <TextField fullWidth onChange={formik.handleChange} name="age" value={formik.values.age}
                               placeholder="Enter Your age"/>

                    <Stack justifyContent="space-between" spacing={2} sx={{width: "100%"}}>
                        <Button variant="container" onClick={goBack}>Back</Button>
                        <Button variant="contained" type="button" fullWidth sx={{height: 55}}
                                onClick={() => handleProceed(3)}>Proceed</Button>
                    </Stack>
                </Stack>
            }

            {
                activeStep?.step === 3 && <Stack direction="column" spacing={2} sx={{width: 500, mx: "auto"}}>
                    <TextField fullWidth onChange={formik.handleChange} name="nokName" value={formik.values.nokName}
                               placeholder="Enter Your nok full name"/>
                    <TextField fullWidth onChange={formik.handleChange} name="nokAddress"
                               value={formik.values.nokAddress} placeholder="Enter Your address"/>
                    <TextField fullWidth onChange={formik.handleChange} name="nokPhone"
                               value={formik.values.nokPhone} placeholder="Enter Your nok phone"/>

                    <Stack justifyContent="space-between" spacing={2} sx={{width: "100%"}}>
                        <Button variant="container" onClick={goBack}>Back</Button>
                        <Button variant="contained" type="submit" fullWidth sx={{height: 55}}
                        >Sign Up</Button>
                    </Stack>
                </Stack>
            }
        </Box>
    )

};

export default Form;