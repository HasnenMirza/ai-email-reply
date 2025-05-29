
// // import { useState } from 'react'
// // import './App.css'
// // import { Button, CircularProgress, Container, InputLabel, MenuItem, Select, Typography ,TextField,
// //   FormControl,
// //   Box} from '@mui/material';

// // function App() {
// //   // const [count, setCount] = useState(0)
// //   const [emailContent,setEmailContent]=useState('');
// //    const [tone,setTone]=useState('');
// //     const [generatedReply,setGeneratedReply]=useState('');
// //      const [loading,setLoading]=useState(false);
// //       const [error,setError]=useState('');

// //   return (
// //     <Container maxWidth="md" sx={{py:4}}>
// //     <Typography variant='h3' component="h1" gutterBottom>
// //       Email Reply Generator
// //       </Typography> 
// //       <Box sx={{mx:3 }}>
// //     <TextField
// //     fullWidth
// //     multiline
// //     rows={10}
// //     variant='outlined'
// //     label="Original Email Content"
// //     value={emailContent }
// //     onChange={(e)=> setEmailContent(e.target.value)}
// //     sx={{mb:2}} />
// //       <FormControl fullWidth sx={{mb:2}}>
// //         <InputLabel>Tone (Optional)</InputLabel>
// //         <Select value={tone || ''}
// //         label={"Tone (Optional)"}
// //         onChange={(e)=>setTone(e.target.value)}>
// //           <MenuItem value="">None</MenuItem>
// //           <MenuItem value="Professional">Professional</MenuItem>
// //           <MenuItem value="Casual">Casual</MenuItem>
// //           <MenuItem value="Friendly">Friendly</MenuItem>

// //         </Select>
// //       </FormControl>
// //       <Button 
// //       variant='contained'
// //       onClick={handleSubmit}
// //       disabled={!emailContent||loading}
// //       fullWidth>
// //         {loading? <CircularProgress size={24}/>: "Generate Reply"}
// //       </Button>
// //       </Box>

// //     </Container>
// //   )
// // }

// // export default App
// // import { useState } from 'react';
// // import './App.css';
// // import {
// //   Button,
// //   CircularProgress,
// //   Container,
// //   InputLabel,
// //   MenuItem,
// //   Select,
// //   Typography,
// //   TextField,
// //   FormControl,
// //   Box
// // } from '@mui/material';
// // import axios from 'axios';

// // function App() {
// //   const [emailContent, setEmailContent] = useState('');
// //   const [tone, setTone] = useState('');
// //   const [generatedReply, setGeneratedReply] = useState('');
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState('');

// //   const handleSubmit = async () => {
// //     try {
// //       setLoading(true);
// //       setError('');
// //       setGeneratedReply('');

// //       // Simulate API call delay
// //       setTimeout(() => {
// //         // const reply = `Here is a ${tone || 'neutral'} reply to your email: "Thank you for your message. I will get back to you shortly."`;
// //         const repsonse= await axios.post("http://localhost:8080/Email/predict/",{emailContent,tone});
// //         setGeneratedReply(typeof repsonse.data==='string'? response.data : JSON.stringify(response.data));
// //         setLoading(false);
// //       }, 2000);
// //     } catch (err) {
// //       setError('Failed to generate reply. Please try again.');
// //       console.log(err);
// //     } finally{
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <Container maxWidth="md" sx={{ py: 4 }}>
// //       <Typography variant="h3" component="h1" gutterBottom>
// //         Email Reply Generator
// //       </Typography>
      
// //       <Box sx={{ mx: 3 }}>
// //         <TextField
// //           fullWidth
// //           multiline
// //           rows={10}
// //           variant="outlined"
// //           label="Original Email Content"
// //           value={emailContent}
// //           onChange={(e) => setEmailContent(e.target.value)}
// //           sx={{ mb: 2 }}
// //         />

// //         <FormControl fullWidth sx={{ mb: 2 }}>
// //           <InputLabel>Tone (Optional)</InputLabel>
// //           <Select
// //             value={tone}
// //             label="Tone (Optional)"
// //             onChange={(e) => setTone(e.target.value)}
// //           >
// //             <MenuItem value="">None</MenuItem>
// //             <MenuItem value="Professional">Professional</MenuItem>
// //             <MenuItem value="Casual">Casual</MenuItem>
// //             <MenuItem value="Friendly">Friendly</MenuItem>
// //           </Select>
// //         </FormControl>

// //         <Button
// //           variant="contained"
// //           onClick={handleSubmit}
// //           disabled={!emailContent || loading}
// //           fullWidth
// //         >
// //           {loading ? <CircularProgress size={24} /> : 'Generate Reply'}
// //         </Button>

// //         {generatedReply && (
// //           <Box mt={3}>
// //             <Typography variant="h6">Generated Reply:</Typography>
// //             <Typography variant="body1">{generatedReply}</Typography>
// //           </Box>
// //         )}

// //         {error && (
// //           <Typography color="error" sx={{ mt: 2 }}>
// //             {error}
// //           </Typography>
// //         )}
// //       </Box>

// //       {/* generated reply code */}
// //       {generatedReply && (
// //         <Box sx={{mt :3}}>
// //           <Typography variant='h6' gutterBottom>
// //         Generated Reply :
// //           </Typography>
// //           <TextField
// //           fullWidth
// //           multiline
// //           rows={10}
// //           variant='outlined'
// //           value={generatedReply || " "}
// //           inputProps={{readOnly:true}}/>

// //           <Button variant='outined'
// //           sx={{mt : 2}}
// //           onClick={()=>navigator.clipboard.writeText(generatedReply)}>
// //             Copy to clipboard
// //           </Button>
// //         </Box>
// //       )}
// //     </Container>
// //   );
// // }

// // export default App;
// import { useState } from 'react';
// import './App.css';
// import {
//   Button,
//   CircularProgress,
//   Container,
//   InputLabel,
//   MenuItem,
//   Select,
//   Typography,
//   TextField,
//   FormControl,
//   Box
// } from '@mui/material';
// import axios from 'axios';

// function App() {
//   const [emailContent, setEmailContent] = useState('');
//   const [tone, setTone] = useState('');
//   const [generatedReply, setGeneratedReply] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = async () => {
//     try {
//       setLoading(true);
//       setError('');
//       setGeneratedReply('');
//       console.log(emailContent);
//       console.log(tone);
//       // const response = await axios.post('http://localhost:8080/Email/predict/', {
//       //   emailContent,
//       //   tone,
//       // });
//       const response = await axios.post('http://localhost:8080/Email/predict/', {
//   emailContent,
//   tone,
// });
//       console.log(response);
//       setGeneratedReply(
//         typeof response.data === 'string' ? response.data : JSON.stringify(response.data)
//       );
//     } catch (err) {
//       console.error(err);
//       setError('Failed to generate reply. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container maxWidth="md" sx={{ py: 4 }}>
//       <Typography variant="h3" component="h1" gutterBottom>
//         Email Reply Generator
//       </Typography>

//       <Box sx={{ mx: 3 }}>
//         <TextField
//           fullWidth
//           multiline
//           rows={10}
//           variant="outlined"
//           label="Original Email Content"
//           value={emailContent}
//           onChange={(e) => setEmailContent(e.target.value)}
//           sx={{ mb: 2 }}
//         />

//         <FormControl fullWidth sx={{ mb: 2 }}>
//           <InputLabel>Tone (Optional)</InputLabel>
//           <Select
//             value={tone}
//             label="Tone (Optional)"
//             onChange={(e) => setTone(e.target.value)}
//           >
//             <MenuItem value="None">None</MenuItem>
//             <MenuItem value="Professional">Professional</MenuItem>
//             <MenuItem value="Casual">Casual</MenuItem>
//             <MenuItem value="Friendly">Friendly</MenuItem>
//           </Select>
//         </FormControl>

//         <Button
//           variant="contained"
//           onClick={handleSubmit}
//           disabled={!emailContent || loading}
//           fullWidth
//         >
//           {loading ? <CircularProgress size={24} /> : 'Generate Reply'}
//         </Button>

//         {error && (
//           <Typography color="error" sx={{ mt: 2 }}>
//             {error}
//           </Typography>
//         )}

//         {generatedReply && (
//           <Box sx={{ mt: 3 }}>
//             <Typography variant="h6" gutterBottom>
//               Generated Reply:
//             </Typography>
//             <TextField
//               fullWidth
//               multiline
//               rows={10}
//               variant="outlined"
//               value={generatedReply}
//               inputProps={{ readOnly: true }}
//               sx={{ mb: 2 }}
//             />
//             <Button
//               variant="outlined"
//               onClick={() => navigator.clipboard.writeText(generatedReply)}
//             >
//               Copy to Clipboard
//             </Button>
//           </Box>
//         )}
//       </Box>
//     </Container>
//   );
// }

// export default App;
import { useState } from 'react';
import {
  Button,
  CircularProgress,
  Container,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  TextField,
  FormControl,
  Box,
  Alert
} from '@mui/material';
import axios from 'axios';

function App() {
  const [emailcontent, setEmailContent] = useState('');
  const [tone, setTone] = useState('None');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError('');
      setGeneratedReply('');
      
      const response = await axios.post('http://localhost:8080/Email/predict/', {
        emailcontent,
        tone: tone === 'None' ? '' : tone
      });
      
      setGeneratedReply(
        typeof response.data === 'string' ? response.data : JSON.stringify(response.data)
      );
    } catch (err) {
      console.error('Error generating reply:', err);
      setError('Failed to generate reply. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Email Reply Generator
      </Typography>

      <Box sx={{ mx: 3 }}>
        <TextField
          fullWidth
          multiline
          minRows={6}
          maxRows={10}
          variant="outlined"
          label="Original Email Content"
          value={emailcontent}
          onChange={(e) => setEmailContent(e.target.value)}
          sx={{ mb: 2 }}
          placeholder="Paste the email you want to reply to here..."
        />

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Tone (Optional)</InputLabel>
          <Select
            value={tone}
            label="Tone (Optional)"
            onChange={(e) => setTone(e.target.value)}
          >
            <MenuItem value="None">None</MenuItem>
            <MenuItem value="Professional">Professional</MenuItem>
            <MenuItem value="Casual">Casual</MenuItem>
            <MenuItem value="Friendly">Friendly</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="contained"
          size="large"
          onClick={handleSubmit}
          disabled={!emailcontent || loading}
          fullWidth
          sx={{ mb: 2 }}
        >
          {loading ? <CircularProgress size={24} /> : 'Generate Reply'}
        </Button>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        {generatedReply && (
          <Box sx={{ mt: 3 }}>
            <Typography variant="h5" gutterBottom>
              Generated Reply:
            </Typography>
            <TextField
              fullWidth
              multiline
              minRows={6}
              maxRows={10}
              variant="outlined"
              value={generatedReply}
              inputProps={{ readOnly: true }}
              sx={{ mb: 2 }}
            />
            <Button
              variant="outlined"
              onClick={() => {
                navigator.clipboard.writeText(generatedReply);
                // You could add a snackbar/toast notification here
              }}
              fullWidth
            >
              Copy to Clipboard
            </Button>
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default App;