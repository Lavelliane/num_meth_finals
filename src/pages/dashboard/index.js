import React, { useState } from 'react';

// material-ui
import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Grid,
    List,
    ListItemAvatar,
    ListItemButton,
    ListItemSecondaryAction,
    ListItemText,
    FormLabel,
    MenuItem,
    Stack,
    TextField,
    Typography,
    FormControl,
    RadioGroup,
    Radio,
    FormControlLabel
} from '@mui/material';

// project import
import OrdersTable from './OrdersTable';
import IncomeAreaChart from './IncomeAreaChart';
import MonthlyBarChart from './MonthlyBarChart';
import ReportAreaChart from './ReportAreaChart';
import SalesColumnChart from './SalesColumnChart';
import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';

// avatar style
const avatarSX = {
    width: 36,
    height: 36,
    fontSize: '1rem'
};

// action style
const actionSX = {
    mt: 0.75,
    ml: 1,
    top: 'auto',
    right: 'auto',
    alignSelf: 'flex-start',
    transform: 'none'
};

// sales report status
const status = [
    {
        value: 'today',
        label: 'Today'
    },
    {
        value: 'month',
        label: 'This Month'
    },
    {
        value: 'year',
        label: 'This Year'
    }
];

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
    const [n, setN] = useState(2);
    const [slot, setSlot] = useState('week');

    return (
        <>
            <Grid container rowSpacing={4.5} columnSpacing={2.75}>
                {/* row 1 */}
                <Grid item xs={12} sx={{ mb: -2.25 }}>
                    <Typography variant="h5">Interpolator / Extrapolator Using Divided Difference Method</Typography>
                </Grid>

                <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
                {/* row 2 */}
                <Grid item xs={12} md={7} lg={8}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="h5">Graph</Typography>
                        </Grid>
                        <Grid item>
                            <Stack direction="row" alignItems="center" spacing={0}>
                                <Button
                                    size="small"
                                    onClick={() => setSlot('week')}
                                    color={slot === 'week' ? 'primary' : 'secondary'}
                                    variant={slot === 'week' ? 'outlined' : 'text'}
                                >
                                    Reset
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                    <MainCard content={false} sx={{ mt: 1.5 }}>
                        <Box sx={{ pt: 1, pr: 2 }}>
                            <IncomeAreaChart slot={slot} />
                        </Box>
                    </MainCard>
                </Grid>
                <Grid item xs={12} md={5} lg={4}>
                    <Grid container alignItems="center" justifyContent="space-between" padding="20px">
                        <Grid item>
                            <Typography variant="h5">Data Points</Typography>
                        </Grid>
                        <Grid item />
                    </Grid>
                    <MainCard sx={{ mt: 2 }} content={false}>
                        <Box sx={{ p: 3, pb: 0 }}>
                            <Stack spacing={2}></Stack>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">Set Number of Datapoints</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                    border="20px"
                                >
                                    <FormControlLabel value="2" control={<Radio />} label="2" onClick={() => setSlot(2)} />
                                    <FormControlLabel value="3" control={<Radio />} label="er" onClick={() => setSlot(3)} />
                                    <FormControlLabel value="4" control={<Radio />} label="4" onClick={() => setSlot(4)} />
                                    <FormControlLabel value="5" control={<Radio />} label="5" onClick={() => setSlot(5)} />
                                </RadioGroup>
                            </FormControl>
                            <Stack spacing={2}></Stack>
                            <Button variant="contained" size="small" margin="20px">
                                Interpolate/Extrapolate
                            </Button>
                            <Stack spacing={2}></Stack>
                        </Box>
                    </MainCard>
                </Grid>

                {/* row 3 */}
                <Grid item xs={12} md={7} lg={8}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="h5">Solution</Typography>
                        </Grid>
                        <Grid item />
                    </Grid>
                    <MainCard sx={{ mt: 2 }} content={false}>
                        <OrdersTable />
                    </MainCard>
                </Grid>
            </Grid>
        </>
    );
};

export default DashboardDefault;
