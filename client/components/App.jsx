'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchExercisesByGroup, fetchMusclesByGroup } from '../redux/actions'
import AllExerciseOptions from './AllExerciseOptions'

class App extends Component {
  constructor(props) {
    super(props)

    const group = 'chest'

    this.props.fetchMusclesByGroup(group)
    this.state = {
      muscleGroup: group.slice(0, 1).toUpperCase() + group.slice(1)
    }
  }

  render () {
    return (
      <div>
        <AllExerciseOptions group={this.state.muscleGroup} muscles={this.props.muscles} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    exercises: state.exercises,
    muscles: state.muscles
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMusclesByGroup: muscleGroup => dispatch(fetchMusclesByGroup(muscleGroup))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
