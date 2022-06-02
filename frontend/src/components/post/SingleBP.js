import React, {useEffect, useState} from "react";
import "../../styles/SingleBP.css";
import p4 from "../../images/post4.jpg";
import CommentBox from "./CommentBox";
import {Button} from "../pageEssentials/Button";
import {useParams} from "react-router-dom";
import axios from "axios";

function SingleBP() {
    let id = useParams();

    const [post, setPost] = useState(null);
    useEffect(() => {
        if (post === null) {
            axios.get('http://localhost:8000/api/coffee-post/' + id.id)
                .then((res) => {
                    setPost(res.data.post)
                    console.log(res.data)
                }).catch((e) => {
            })
        }
    }, [post])


    return (
        <>
            {post === null ? <></> : <div className="container mt-4" style={{marginBottom: -200 + "px"}}>
                <div className="row">
                    <div className="col-lg-11">
                        <article>
                            <header className="mb-4">
                                <h1 className="fw-bolder mb-1">{post.title}</h1>
                                <div className="text-muted fst-italic mb-2">
                                    Postavljeno {(new Date(post.created_at)).toLocaleDateString()} Postavio {post.user_id.name} {post.user_id.lastname}
                                </div>
                                <p className="badge bg-dark text-decoration-none link-light">
                                    {post.category_id.name}
                                </p>
                            </header>
                            <figure className="mb-4">
                                <img className="img-fluid rounded" src={p4} alt="..."/>
                            </figure>
                            <section className="mb-8">
                                <p className="fs-5 mb-4">
                                    {post.post_content}
                                </p>
                            </section>
                        </article>
                        <section className="mb-5" style={{paddingBottom: 200 + "px"}}>
                            <div className="card bg-light">
                                <div className="card-body">
                                    <form className="mb-4">
                    <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Ostavite komentar i pridruzi se diskusiji!"
                    />
                                        <button
                                            className=" col-lg-2 offset-lg-10"
                                            style={{
                                                marginTop: 1 + "em",
                                                backgroundColor: " #17181b",
                                                color: "white",
                                                border: " 3 px solid var(--primary)",
                                                transition: "all 0.3s ease-out",
                                            }}
                                            text="Potvrdi"
                                        >
                                            {" "}
                                            Potvrdi
                                        </button>
                                    </form>
                                    <div>
                                        <CommentBox/>
                                        <CommentBox/>
                                        <CommentBox/>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>}
        </>
    );
}

export default SingleBP;
