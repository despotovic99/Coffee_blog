import "../../styles/AddPost.css";
import {AiOutlineCamera} from "react-icons/ai";
import {useEffect, useState} from "react";
import axios from "axios";

const AddPost = () => {

    const [categories, setCategories] = useState(null);
    const [coffees, setCoffees] = useState(null);

    useEffect(() => {
        if (coffees === null) {
            axios.get('http://localhost:8000/api/coffee')
                .then((res) => {
                    setCoffees(res.data.coffees)
                }).catch((e) => {

            })
        }
    }, [coffees]);

    useEffect(() => {

        if (categories === null) {
            axios.get('http://localhost:8000/api/category')
                .then((res) => {
                    setCategories(res.data.categories)
                }).catch((e) => {

            })
        }
    }, [categories])

    const [postInput, setPost] = useState({
        title: "",
        post_content: "",
        category_id: "",
        coffee_id: "",
    });

    const handleInput = (e) => {
        e.persist();
        setPost({
            ...postInput,
            [e.target.name]: e.target.value,
        });


    };

    function sacuvajPost(e) {
        e.preventDefault()
        axios.post('http://localhost:8000/api/coffee-post',postInput,{
            headers: {
                'Authorization': 'Bearer ' + window.sessionStorage.getItem('auth_token')
            }
        })
            .then((res)=>{
                console.log(res.data)
                if(res.data.success){
                    alert(res.data.message)
                }
            }).catch((e)=>{
            console.log(e)
        })
    }

    return (
        <div>
            <div class="image">
                <input type="file" accept="image/*" id="image-upload" hidden/>
                <label for="image-upload" class="image-upload-btn">
                    <AiOutlineCamera size={35}/>
                </label>
            </div>
            <div class="blog">
                <form onSubmit={sacuvajPost}>
                    <input
                        type="text"
                        name="title"
                        className="title"
                        placeholder="Naslov novog članka..."
                        onChange={handleInput}
                    />

                    <textarea
                        type="text"
                        className="article"
                        name='post_content'
                        placeholder="Počnite da pišete ovde..."
                        onChange={handleInput}
                    />
                    <div>
                        <label>Izaberi kategoriju</label>
                        <select name='category_id' onChange={handleInput}>
                            <option value=''>Odaberi</option>
                            {categories == null ? <></> : categories.map((kategorija) => (
                                <option key={kategorija.id} value={kategorija.id}>{kategorija.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Izaberi kafu</label>
                        <select name='coffee_id' onChange={handleInput}>
                            <option value>Nema</option>
                            {coffees == null ? <></> : coffees.map((coffee) => (
                                <option key={coffee.id} value={coffee.id}>{coffee.coffee_name}</option>
                            ))}
                        </select>
                    </div>
                    <button
                        className="publish-btn"
                        type='submit'
                    >Potvrdi
                    </button>
                </form>
            </div>
        </div>
    );
};
export default AddPost;
