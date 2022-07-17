
import LeftPart from "../components/Leftpart";
import Table from "../components/Table";
import Heading from "../components/Heading";
import TableTop from "../components/TableTop";
import SideBar from "../components/SideBar";
import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

export default function Home({notes}) {
  console.log(notes);
  return (
      <div className="h-screen w-screen bg-slate-400 flex flex-row">
        {/*this is the left side
          <div className="bg-white w-1/5 h-screen">
            <div className="px-6 py-3 ">
                <img src="https://celetel.com/images/main_logo.svg?imwidth=256" alt="celetal logo" ></img>
            </div>
            <LeftPart text={"Home"}/>
          </div>

        */ }
        <SideBar />
      {/*this is the right side*/ }
      <div className="w-full bg-slate-100 px-4 pr-10">
        <Layout>
          
          <Heading />
          <TableTop />
          <Table notes={notes}/>
          </Layout>
          </div>
      </div>
  )
}

Home.getInitialProps = async ()=>{
  const res = await fetch('http://localhost:3000/api/notes');
  const { data } = await res.json();

  return { notes: data }
}
