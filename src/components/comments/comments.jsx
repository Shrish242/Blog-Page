import React from 'react'
import styles from '../comments/comments.module.css'
import Image from 'next/image'
import profile from "../Image/zoro.jpeg"

const comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {
        status === "authenticated" ? (
          <div className={styles.write}>
            <textarea className={styles.textarea} placeholder="Write your comment here..."></textarea>
            <button className={styles.button}>Post</button>
          </div>
        ):
        (
          <div className={styles.notauthenticated}>
            <p>Please login to comment</p>
          </div>
        )}
        <div className={styles.comments}>
          <div className={styles.comment}>
            <div className={styles.user}>
              <Image src={profile} width={20} height={20} className={styles.image}  />
            
            <div className={styles.userinfo}>
              <span>Shrish Dhakal</span>
              <span>2023-2-12</span>
            </div>
            </div>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi suscipit optio minima praesentium quidem, non mollitia? Iste, saepe fugit rerum eos cupiditate aliquid sapiente, dicta voluptatem architecto eligendi porro odit.
            </p>
        </div>
      </div>
      <div className={styles.comments}>
          <div className={styles.comment}>
            <div className={styles.user}>
              <Image src={profile} width={20} height={20} className={styles.image}  />
            
            <div className={styles.userinfo}>
              <span>Shrish Dhakal</span>
              <span>2023-2-12</span>
            </div>
            </div>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi suscipit optio minima praesentium quidem, non mollitia? Iste, saepe fugit rerum eos cupiditate aliquid sapiente, dicta voluptatem architecto eligendi porro odit.
            </p>
        </div>
      </div>
      <div className={styles.comments}>
          <div className={styles.comment}>
            <div className={styles.user}>
              <Image src={profile} width={20} height={20} className={styles.image}  />
            
            <div className={styles.userinfo}>
              <span>Shrish Dhakal</span>
              <span>2023-2-12</span>
            </div>
            </div>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi suscipit optio minima praesentium quidem, non mollitia? Iste, saepe fugit rerum eos cupiditate aliquid sapiente, dicta voluptatem architecto eligendi porro odit.
            </p>
        </div>
      </div><div className={styles.comments}>
          <div className={styles.comment}>
            <div className={styles.user}>
              <Image src={profile} width={20} height={20} className={styles.image}  />
            
            <div className={styles.userinfo}>
              <span>Shrish Dhakal</span>
              <span>2023-2-12</span>
            </div>
            </div>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi suscipit optio minima praesentium quidem, non mollitia? Iste, saepe fugit rerum eos cupiditate aliquid sapiente, dicta voluptatem architecto eligendi porro odit.
            </p>
        </div>
      </div>
    </div>
  )
}

export default comments