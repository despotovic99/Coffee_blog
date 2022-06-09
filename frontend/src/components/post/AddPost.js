import "../../styles/AddPost.css";
import {AiOutlineCamera} from "react-icons/ai";
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

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

    const [postInput, setPostInput] = useState({
        title: "",
        post_content: "",
        category_id: "",
        coffee_id: "",
    });

    const handleInput = (e) => {
        e.persist();
        setPostInput({
            ...postInput,
            [e.target.name]: e.target.value,
        });


    };
    let id = useParams();

    const [post, setPost] = useState(null);
    useEffect(() => {
        if (post === null && id.id!==undefined) {
            axios.get('http://localhost:8000/api/coffee-post/' + id.id)
                .then((res) => {
                    console.log(res.data)
                    setPost(res.data.post)
                }).catch((e) => {
            })
        }
    }, [post])


    function sacuvajPost(e) {
        e.preventDefault()
        axios.post('http://localhost:8000/api/coffee-post', postInput, {
            headers: {
                'Authorization': 'Bearer ' + window.sessionStorage.getItem('auth_token')
            }
        })
            .then((res) => {
                console.log(res)
                if (res.data.success) {
                    alert(res.data.message)
                    window.location.href='/blogs'
                } else {
                    alert(res.data.error)
                }
            }).catch((e) => {
            console.log(e)
        })
    }

    return (
        <div>

            <div className="blog">
                <form onSubmit={sacuvajPost}>
                    <input
                        type="text"
                        name="title"
                        className="title"
                        placeholder="Naslov novog članka..."
                        onChange={handleInput}
                        value={post==null?"":post.title}
                    />

                    <textarea
                        className="article"
                        name='post_content'
                        placeholder="Počnite da pišete ovde..."
                        onChange={handleInput}
                        value={post==null?"":post.post_content}
                    />
                    <div>
                        <label>Izaberi kategoriju</label>
                        <select name='category_id' onChange={handleInput} value={post!=null&&post.category_id!=null? post.category_id.id:0}>
                            <option value=''>Odaberi</option>
                            {categories == null ? <></> : categories.map((kategorija) => (
                                <option key={kategorija.id} value={kategorija.id}>{kategorija.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Izaberi kafu</label>
                        <select name='coffee_id' onChange={handleInput} value={post!=null&&post.coffee_id!=null? post.coffee_id.id:0}>
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
