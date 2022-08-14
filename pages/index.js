import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const send = async (e) => {
    e.preventDefault()
    const cards = await fetch(`https://api.trello.com/1/cards?key=383f78a42a2c6a138a6a2f61037d312e&token=2bde1a27064429f50a0ddcb7ab4f83887e77b95f3b90ba279d4e6d900a65dc8b&idList=6107e665f13b1521ca876557&name=${document.querySelector('#name').value}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
    console.log(cards)
  }
  // send form data to trello
  return (
    <>
      form to send data to trello
      <form onSubmit={send}>
        <input id='name' type="text" name="name" placeholder="name" />
        <input type="submit" value="submit" />
      </form>
    </>
  )
}
// trello card: https://trello.com/c/XZQZQZQZ/
export async function getStaticProps() {

  return {
    props: {},
  }
}