import { MenuItem} from '@mui/material';
import {useState} from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useTranslation } from 'react-i18next';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import LanguageIcon from '@mui/icons-material/Language';


const SelectLang = () => {
    const {i18n } = useTranslation();
    const [language, setLanguage] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        i18n.changeLanguage(event.target.value);
        setLanguage(event.target.value as string);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">< LanguageIcon / ></InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={language}
                label="Language"
                onChange={handleChange}
            >
            
            <MenuItem value={"en"}>EN</MenuItem>
            <MenuItem value={"ua"}>UA</MenuItem>
        </Select>
        </FormControl>
    );
}
export default SelectLang
