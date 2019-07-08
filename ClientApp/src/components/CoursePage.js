import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createCourse } from '../redux/actions/courseActions'

class CoursePage extends Component {
    state = {
        course: {
            title: ''
        }
    }

    handleChange = event => {
        const course = { ...this.state.course, title: event.target.value };
        this.setState({ course });
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.createCourse(this.state.course);
    }

    render() {
        const { title } = this.state.course;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Courses</h2>
                    <h3>Add Courses</h3>
                    <input type="text"
                        id="title"
                        onChange={this.handleChange}
                        value={title} />
                    <button type="submit">Add Course</button>
                    {this.props.courses && this.props.courses.map((course, index) => <div key={index}>{course.title}</div>)}
                </form>
            </div>
        )
    }
}
//what is passed to the component via props
const mapStateToProps = (state) => {
    return {
        courses: state.courses
    };
}

//what actions are passed to the component via props
const mapDispatchToProps = {
    createCourse
}


export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);