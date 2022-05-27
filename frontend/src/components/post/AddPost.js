import "../../styles/AddPost.css";
import {AiOutlineCamera} from "react-icons/ai";
import {useEffect, useState} from "react";
import axios from "axios";

const AddPost = () => {

    const [categories, setCategories] = useState(null);
    const [coffees, setCoffees] = useState(null);

    useEffect(()=>{
        if (coffees === null) {
            axios.get('http://localhost:8000/api/coffee')
                .then((res) => {
                    setCoffees(res.data.coffees)
                }).catch((e) => {

            })
        }
    },[coffees]);

    useEffect(() => {

        if (categories === null) {
            axios.get('http://localhost:8000/api/category')
                .then((res) => {
                    setCategories(res.data.categories)
                }).catch((e) => {

            })
        }
    }, [categories])

    return (
        <div>
            <div class="image">
                <input type="file" accept="image/*" id="image-upload" hidden/>
                <label for="image-upload" class="image-upload-btn">
                    <AiOutlineCamera size={35}/>
                </label>
            </div>
            <div class="btn">
                <button
                    className="publish-btn"
                >Potvrdi
                </button>
            </div>
            <div class="blog">
                <form>
                    <input
                        type="text"
                        name="title"
                        className="title"
                        placeholder="Naslov novog članka..."
                    />

                    <textarea
                        type="text"
                        className="article"
                        name='post_content'
                        placeholder="Počnite da pišete ovde..."
                    />
                    <div>
                        <label>Izaberi kategoriju</label>
                        <select name='category_id'>
                            {categories == null ? <></> : categories.map((kategorija) => (
                                <option key={kategorija.id} value={kategorija.id}>{kategorija.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Izaberi kafu</label>
                        <select name='coffee_id'>
                            {coffees == null ? <></> : coffees.map((coffee) => (
                                <option key={coffee.id} value={coffee.id}>{coffee.coffee_name}</option>
                            ))}
                        </select>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default AddPost;
