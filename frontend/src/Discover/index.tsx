import { useState } from 'react';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import SearchIcon from '@mui/icons-material/Search';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { TextField, MenuItem, Avatar, Box, Chip, Card, CardActions, CardContent, CardMedia, Container, Divider, IconButton, InputAdornment, OutlinedInput, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom'
import { useFetchAll } from "../Utils/useFetch"
import forestIcon from './forest1.webp'
import reforestationIcon from './temp.jpg'


interface DataProps {
    slug: string
    forest_name: string,
    thumbnail_image: any,
    forest_type: string,
    brief_description: string,

    location: { lat: number, lng: number },
    area_covered: string,
    country: string,
    long_description: string,
    health_metrics: {
        current_amount: string, // (tonnes of CO2)
        change_in_carbon: string, // the last 30 days.
    },
}

const Discover = () => {
    const data = useFetchAll()
    const [search, setSearch] = useState("")
    const [type, setType] = useState("")


    const filterData = (data: Array<DataProps>) => {
        let result = data?.filter((v) => (
            v.forest_name?.toLowerCase().includes(search?.toLowerCase()) &&
            (v.forest_type?.toLowerCase().includes(type?.toLowerCase()) ||
                type === "All")
        ))
        return result
    }

    const handleChange = (value) => {
        setSearch(value.target.value)
    }

    const handleType = (value) => {
        setType(value.target.value)
    }
    return (
        <Container maxWidth="lg">
            <Typography variant='h6' sx={{
                fontSize: 14,
                color: 'primary',
                marginTop: 2,
            }} >Discover</Typography>
            <Typography variant='h5' sx={{
                marginY: 1,
                fontSize: 18,
                fontWeight: 'bold',
                color: 'primary',
            }}>
                The Amazon
                <IconButton
                    size="small"
                    color="inherit"
                    aria-label="menu"
                >
                    <AddAlertOutlinedIcon sx={{ marginLeft: 1, color: "secondary.main", width: 16, height: 16 }} />
                </IconButton>
            </Typography>
            <Box display={"flex"} justifyContent="space-between">

                <OutlinedInput
                    onChange={(value) => handleChange(value)}
                    label="Search"
                    id="outlined-size-small"
                    color="secondary"
                    size="small"
                    sx={{ width: { sm: "280px" }, height: "40px" }}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                edge="end"
                            >
                                <SearchIcon />

                            </IconButton>
                        </InputAdornment>}
                />
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    size='small'
                    value={type}
                    onChange={(e) => handleType(e)}
                    helperText="filter by forest type"

                >
                    {["All", "Conservation", "Reforestation"].map((option) => (
                        <MenuItem sx={{ height: "40px" }} key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </Box>
            <Divider sx={{ marginY: 1, color: "primary" }} />
            <Typography variant='subtitle2' marginY={2}>
                Newly discovered forest <WhatshotIcon sx={{ width: 12, height: 12, color: 'secondary.main', flexGrow: 1 }} />
            </Typography>
            <Stack
                display={"grid"}
                gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr" }}
                gap={4}
            >
                {
                    filterData(data)?.map((data, index) => (
                        <Card key={index} sx={{
                            width: { xs: "100%", sm: "100%" },
                        }}>
                            <CardMedia
                                component="img"
                                height="280"
                                image={data.thumbnail_image}
                                alt="green iguana"
                            >

                            </CardMedia>
                            <Link to={`${data.slug}`} style={{ textDecoration: "none" }}>
                                <CardActions sx={{
                                    textDecoration: "none",
                                }}>
                                    <CardContent sx={{ width: "100%" }}>
                                        <Box display={"flex"} >
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="div"
                                                color="text.secondary"
                                                sx={{
                                                    textTransform: "capitalize",
                                                    flexGrow: 1,
                                                }}
                                            >
                                                {data.forest_name}
                                            </Typography>
                                            <Chip
                                                avatar={<Avatar alt={data.forest_type} src={data.forest_type.toLowerCase() === "conservation" ? forestIcon : reforestationIcon} />}
                                                label={data.forest_type}
                                                variant="outlined"
                                            />
                                        </Box>
                                        <Typography variant="body2" color="text.secondary">
                                            {data.brief_description}
                                        </Typography>
                                    </CardContent>
                                </CardActions>
                            </Link>
                        </Card>
                    ))
                }
            </Stack>

            <Divider sx={{ marginY: 2, color: "primary" }} />

        </Container >
    )
}

export { Discover };
export default Discover