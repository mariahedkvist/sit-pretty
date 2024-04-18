import {
  Box,
  ThemeProvider,
  Button,
  TextField,
  Typography,
} from '@mui/material';
import theme from '../themes/theme';
import { Formik, useFormik } from 'formik';
import * as yup from 'yup';
import { DatePicker } from '@mui/x-date-pickers';
import { postEntries } from '../services/api';

const validationSchema = yup.object({
  location: yup.string().required('Location is required'),
  description: yup.string().required('Description is required'),
  rating: yup.number().typeError('Must be a number'),
  reflection: yup.string(),
});

const Create = () => {
  const formik = useFormik({
    initialValues: {
      location: '',
      description: '',
      rating: 0,
      reflection: '',
      date: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await postEntries(values);
        console.log(response);
      } catch (err) {
        console.log(err);
        throw err;
      }
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <Typography
          p={5}
          variant={'h1'}
          sx={{
            fontFamily: 'Chakra Petch, Arial, sans-serif',
            fontSize: 40,
            color: '#063970',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Sit Pretty
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: 500,
            }}
          >
            <DatePicker
              disableFuture
              sx={{ m: 2, width: '100%' }}
              name="date"
              label="Date"
              onChange={(value) => formik.setFieldValue('date', value, true)}
            />
            <TextField
              sx={{ m: 2, width: '100%' }}
              id="location"
              name="location"
              label="Location"
              value={formik.values.location}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.location && Boolean(formik.errors.location)}
              helperText={formik.touched.location && formik.errors.location}
            />
            <TextField
              sx={{ m: 2, width: '100%' }}
              id="description"
              name="description"
              label="Description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
            />
            <TextField
              sx={{ m: 2, width: '100%' }}
              id="rating"
              name="rating"
              label="Rating"
              value={formik.values.rating}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.rating && Boolean(formik.errors.rating)}
              helperText={formik.touched.rating && formik.errors.rating}
            />
            <TextField
              multiline
              sx={{ m: 2, width: '100%' }}
              id="reflection"
              name="reflection"
              label="Reflection"
              value={formik.values.reflection}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.reflection && Boolean(formik.errors.reflection)
              }
              helperText={formik.touched.reflection && formik.errors.reflection}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                fontFamily: 'Chakra Petch, Arial, sans-serif',
                fontSize: 18,
                color: '#063970',
                backgroundColor: '#76aaea',
                width: 150,
              }}
            >
              Skapa
            </Button>
          </Box>
        </form>
      </Box>
    </ThemeProvider>
  );
};

export default Create;
