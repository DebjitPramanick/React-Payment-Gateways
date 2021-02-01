import React, {useState} from 'react'
import "./styles.css"



const BuyScreen = (props) => {


    const [method, setMethod] = useState("PayPal")


    const goTo = () => {
        props.history.push(`/payment/${method}`);
    }


    return (
      <div className="container">
        <div className="pd-con">
          <img src="https://i.ibb.co/WshYBfZ/monitor-copy.jpg" />
          <h1>curved monitor</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <select
            name="methods"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
          >
            <option value="PayPal">PayPal</option>
            <option value="Stripe">Stripe</option>
            <option value="G-Pay">G-Pay</option>
          </select>

          <button onClick={() => goTo()}>But this product</button>
        </div>
      </div>
    );
}

export default BuyScreen
