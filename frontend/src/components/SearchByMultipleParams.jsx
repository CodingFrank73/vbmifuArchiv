import { useState } from 'react';

import {
    Box,
    TextField,
    Button
} from '@mui/material'

import apiBaseUrl from "../api"
import ResultList from './ResultList';

const SearchByMultipleParams = () => {

    const [ref, setRef] = useState('');
    const [lot, setLot] = useState('');
    const [gtin, setGtin] = useState('');
    const [resultList, setResultList] = useState();

    const submit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(apiBaseUrl + `/multiSearch/?ref=${ref}&lot=${lot}&gtin=${gtin}`)

            const result = await response.json()
            setResultList(result)
            console.log(result);

        } catch (error) {

        }
    }

    return (
        <>
            <div className="mainFrame">
                <Box
                    sx={[
                        {
                            width: {
                                xs: 300, // theme.breakpoints.up('xs')
                                sm: 200, // theme.breakpoints.up('sm')
                                md: 300, // theme.breakpoints.up('md')
                                lg: 400, // theme.breakpoints.up('lg')
                                xl: 500 // theme.breakpoints.up('xl')
                            },
                            m: 4,
                        }

                    ]}
                >
                    <form>
                        <TextField
                            id='search-param-ref'
                            label='Ref'
                            variant='outlined'
                            size='small'
                            margin='dense'
                            value={ref}
                            onChange={(e) => setRef(e.target.value)}
                        />

                        <TextField
                            id='search-param-lot'
                            label='Lot'
                            variant='outlined'
                            size='small'
                            margin='dense'
                            value={lot}
                            onChange={(e) => setLot(e.target.value)}
                        />

                        <TextField
                            id='search-param-gtin'
                            label='gtin'
                            variant='outlined'
                            size='small'
                            margin='dense'
                            value={gtin}
                            onChange={(e) => setGtin(e.target.value)}
                        />

                        <Button onClick={submit}>Search</Button>
                    </form>
                </Box>
            </div>

            <div className="resultFrame">
                {resultList && <ResultList result={resultList} />}
            </div>
        </>
    );
}

export default SearchByMultipleParams;