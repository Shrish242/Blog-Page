"use client"
import React from 'react'
import styles from '../write/page.module.css'
import { useState } from 'react'
import Image from 'next/image'
import add1 from '../../components/Image/add.png'
import addfile from '../../components/Image/addfile.png'
import addimage from '../../components/Image/addimage.png'
import addvideo from '../../components/Image/addvideo.png'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';


const page = () => {
    const [open , setopen] = useState(false)
    const [value, setValue] = useState('');
  return (
    <div className={styles.container}>page
    <input type="text" placeholder='Title' />
    <div className={styles.editor}>
        <button className={styles.button}>
        <Image src={add1}  width={16} height={16} onClick={() => {setopen(!open)}}/>
        </button>
        {
            open && (
                <div className={styles.add}>
                    <button className={styles.addbutton}>
                        <Image src={addfile} width={16} height={16}/>
                    </button>
                    <button className={styles.addbutton}>
                        <Image src={addimage} width={16} height={16}/>
                    </button>
                    <button className={styles.addbutton}>
                        <Image src={addvideo} width={16} height={16}/>
                    </button>
                </div>
            )
        }
        <ReactQuill theme="bubble" value={value} onChange={setValue} className={styles.story} placeholder="Please tell your story"/>
    </div>
    </div>
  )
}

export default page