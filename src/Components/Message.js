import React from 'react'

const Message = () => {
  return (
    <>
    <div id="form">
        <form>
            <input type="text" placeholder='Your Name' />
            <input type="email" placeholder='Your Email' />
            <textarea name="message" id="textarea" placeholder='Your Message'></textarea>
            <button>Send Message</button>
        </form>
    </div>
    </>
  )
}

export default Message