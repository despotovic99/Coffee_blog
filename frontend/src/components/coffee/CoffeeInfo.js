import "../../styles/Entity.css";
import {Button} from "../pageEssentials/Button";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

const CoffeeInfo = () => {
    function sacuvaj(e) {
        e.preventDefault()
        if (id.id !== null && id.id !== undefined) {
            axios.put('http://localhost:8000/api/coffee/' + id.id, coffee, {
                headers: {
                    'Authorization': 'Bearer ' + window.sessionStorage.getItem('auth_token')
                }
            })
                .then((res) => {
                    console.log(res)
                    if (res.data.success) {
                        alert(res.data.message)
                        window.location.href = '/coffees'
                    } else {
                        alert(res.data.error)
                    }
                }).catch((e) => {
                console.log(e)
            })
        } else {
            axios.post('http://localhost:8000/api/coffee', coffee, {
                headers: {
                    'Authorization': 'Bearer ' + window.sessionStorage.getItem('auth_token')
                }
            })
                .then((res) => {
                    console.log(res)
                    if (res.data.success) {
                        alert(res.data.message)
                        window.location.href = '/coffees'
                    } else {
                        alert(res.data.error)
                    }
                }).catch((e) => {
                console.log(e)
            })
        }
    }

    const [coffee,setCoffee]=useState(null);
    const handleInput = (e) => {
        console.log(coffee)
        e.persist();
        setCoffee({
            ...coffee,
            [e.target.name]: e.target.value,
        });
    };

    let id = useParams();
    useEffect(() => {
        if (coffee === null && id.id !== undefined) {
            axios.get('http://localhost:8000/api/coffee/' + id.id)
                .then((res) => {
                    console.log(res.data)
                    setCoffee(res.data.coffee)
                }).catch((e) => {
            })
        }
    }, [coffee])

    return (
        <>
            <div className="coffee">
                <h2>Kafa</h2>
                <div className="row">
                    <div className="column">
                        <label>Naziv</label>
                        <input type="text" name='coffee_name' onChange={handleInput}
                               value={coffee == null ? '' : coffee.coffee_name}/>

                        <label>Vrsta</label>
                        <input type="text" name="coffee_sort" onChange={handleInput}
                               value={coffee == null ? '' : coffee.coffee_sort}/>

                        <label>Kratak opis</label>
                        <textarea name="description" onChange={handleInput}
                               value={coffee == null ? '' : coffee.description}/>
                    </div>
                    <div className="column">
                        <label>Poreklo</label>
                        <input type="text" name="country_origin" onChange={handleInput}
                               value={coffee == null ? '' : coffee.country_origin}/>
                    </div>
                </div>
            </div>
            <div className="btnInfo">
                <Button
                    className="btnUpdateCoffeeInfo"
                    buttonStyle="color"
                    buttonSize="small"
                    text="Sacuvaj"
                    onClick={sacuvaj}
                ></Button>

            </div>
        </>
    );
};
export default CoffeeInfo;
