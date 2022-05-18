import "./Input.css"

const SearchInput = ({type, placeholder}) => {

    return (
        <div className="input-field searchInput">
           <input type="search" placeholder={placeholder}/>
           {/* <button class="search__button field__button" aria-label="Search Here"> */}
              {/* <svg class="icon icon-search" aria-hidden="true" focusable="false" role="presentation"> */}
              <i className="fa fa-search"></i>
              {/* </svg> */}
            {/* </button> */}
        </div>
    )
}

export default SearchInput;