import FormCtrl from "../../../components/Form/FormCtrl";

const SearchBar = ({ onChange }) => {
    return (<>
        <FormCtrl type="search"
            placeholder="Search..."
            onChange={(e) => onChange(e.target.value)} />
    </>
    );
};

export default SearchBar;