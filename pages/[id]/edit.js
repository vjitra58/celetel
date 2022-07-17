import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Button, Form, Loader } from 'semantic-ui-react';
import { useRouter } from 'next/router';

const EditNote = ({ note }) => {
    const [form, setForm] = useState({ username:note.username, email: note.email , phoneNo:note.phoneNo, company:note.company});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const router = useRouter();

    useEffect(() => {
        if (isSubmitting) {
            if (Object.keys(errors).length === 0) {
                updateNote();
            }
            else {
                setIsSubmitting(false);
            }
        }
    }, [errors])

    const updateNote = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/notes/${router.query.id}`, {
                method: 'PUT',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
            router.push("/");
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let errs = validate();
        setErrors(errs);
        setIsSubmitting(true);
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

   const validate = () => {
        let err = {};

        if (!form.username) {
            err.username = 'username is required';
        }
        if (!form.email) {
            err.email = 'email is required';
        }
        if (!form.phoneNo) {
            err.phoneNo = 'phoneNo is required';
        }
        if (!form.company) {
            err.company = 'company is required';
        }

        return err;
    }


    return (
        <div className="grid h-screen place-items-center">
            <h1 className="text-3xl font-extrabold text-blue-600 text-center">Create Note</h1>
            <div className="">
                {
                    isSubmitting
                        ? <div>Loading.....</div>
                        : <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
  <form onSubmit={handleSubmit}>
    <div className="form-group mb-6">
      <input onChange={handleChange} type="text" name="username" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
        placeholder="UserName"
        value={form.username} />
    </div>
    <div className="form-group mb-6">
      <input onChange={handleChange} type="email" name="email" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
        placeholder="Email"
        value={form.email} />
    </div>
    <div className="form-group mb-6">
      <input onChange={handleChange} type="text" name="phoneNo" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
        placeholder="PhoneNo" 
        value={form.phoneNo}/>
    </div>

    <div className="form-group mb-6">
      <input onChange={handleChange} type="text" name="company" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
        placeholder="company"
        value={form.company} />
    </div>
    
    <button type="submit" className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">Update</button>
  </form>
</div>
                }
            </div>
        </div>
    )
}

EditNote.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(`http://localhost:3000/api/notes/${id}`);
    const { data } = await res.json();

    return { note: data }
}

export default EditNote;