import { useState } from 'react';

import {
    Box,
    TextField,
    Button
} from '@mui/material'

import apiBaseUrl from "../api"
import ResultList from './ResultList';

const SearchByOneParam = () => {

    const [input, setInput] = useState('');
    const [resultList, setResultList] = useState();

    const submit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(apiBaseUrl + `/freeParam/?input=${input}`)

            const result = await response.json()
            setResultList(result)
            console.log(result);

        } catch (error) {

        }

    }

    return (
        <>
            <div className="mainFrame">
                <form>
                    <TextField
                        id='serach-param'
                        variant='outlined'
                        size='small'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Button onClick={submit}>Search</Button>
                </form>
            </div>

            <div className="resultFrame">
                {resultList && <ResultList result={resultList} />}
            </div>
        </>
    );
}

export default SearchByOneParam;