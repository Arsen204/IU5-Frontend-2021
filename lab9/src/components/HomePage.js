import {React, useState} from 'react'
import { useHistory, useRouteMatch } from 'react-router'

function HomePage({onSearch}) {
    const [value, setValue] = useState('')
    const history = useHistory()

    function removeSlash(path) {
        return path.charAt(path.length - 1) === "/" ? path.slice(0, -1) : path
    }

    const url = removeSlash(useRouteMatch().url)

    function handleSubmit(value) {
        onSearch(value)
        history.push(`${url}/user`)
    }

    return (
        <div className="container center-align">
            <div className="input-field-container s12">
                <div className="input-field">
                    <i className="material-icons prefix">account_circle</i>
                    <input 
                        id="icon_prefix"
                        type="text"
                        className="validate"
                        onChange={(e) => setValue(e.target.value)}
                        onKeyPress={(e) => {
                            if(e.key === "Enter") {
                                handleSubmit(value)
                            }
                        }} />
                    <label htmlFor="icon_prefix">Github Account</label>
                </div> 
            </div>
            <button className="waves-effect waves-light btn-large" onClick={() => handleSubmit(value)}>Search</button>
        </div>
    )
}

export default HomePage