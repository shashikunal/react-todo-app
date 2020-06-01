import React, { Component, Fragment } from "react";
class TodoInput extends Component {
  state = {};
  render() {
    let { handleSubmit, item, handleChange, editTodo } = this.props;
    return (
      <Fragment>
        <section className="col-md-5 my-4 card mx-auto">
          <article className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="input-group-inline">
                <input
                  type="text"
                  className="form-control"
                  placeholder="todo list"
                  onChange={handleChange}
                  value={item}
                />
              </div>
              <button
                className={
                  editTodo
                    ? "btn btn-success btn-block my-4"
                    : "btn btn-primary btn-block my-4"
                }
              >
                {editTodo ? "EditTodo" : "Add todo"}
              </button>
            </form>
          </article>
        </section>
      </Fragment>
    );
  }
}

export default TodoInput;
