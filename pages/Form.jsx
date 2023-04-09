import { useReducer, useRef } from "react";
import { formReducer, INITIAL_STATE } from "./formReducer";

export default function Form() {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const tagRef = useRef();

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleTags = () => {
    const tags = tagRef.current.value.split(",");
    tags.forEach((tag) => {
      dispatch({ type: "ADD_TAG", payload: tag });
    });
  };

  console.log(state);

  return (
    <div>
      <form method="post">
        {/* Title Field */}
        <input
          type="text"
          placeholder="Title"
          onChange={handleChange}
          name="title"
        />
        {/* Description Field */}
        <input
          type="text"
          placeholder="Desc"
          onChange={handleChange}
          name="desc"
        />
        {/* Price Field */}
        <input
          type="text"
          placeholder="Price"
          onChange={handleChange}
          name="price"
        />
        {/* Category Field */}
        <p>Category:</p>
        <select name="category">
          <option value="sneakers">Sneakers</option>
          <option value="tshirt">T-Shirt</option>
          <option value="jeans">Jeans</option>
        </select>
        {/* Tags Field */}
        <p>Tags:</p>
        <textarea
          ref={tagRef}
          cols="30"
          rows="10"
          placeholder="Separate tags with commas..."
          name="tags"
        ></textarea>
        <button onClick={handleTags} type="button">
          Add Tags
        </button>
        <div className="tags">
          {state.tags.map((tag) => (
            <small
              onClick={() => dispatch({ type: "REMOVE_TAG", payload: tag })}
              key={tag}
            >
              {tag}
            </small>
          ))}
        </div>
        <div className="quantity">
          <button type="button" onClick={() => dispatch({ type: "DECREASE" })}>
            -
          </button>
          <span>Quantity ({state.quatity})</span>
          <button type="button" onClick={() => dispatch({ type: "INCREASE" })}>
            +
          </button>
        </div>
      </form>
    </div>
  );
}
