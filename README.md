# ReduxToolkitExample
Source : https://redux-toolkit.js.org/tutorials/overview

- Something happens in the app, such as a user clicking a button
- The app code dispatches an action to the Redux store, like dispatch({type: 'counter/incremented'})
- The store runs the reducer function again with the previous state and the current action, and saves the return value as the new state
- The store notifies all parts of the UI that are subscribed that the store has been updated
- Each UI component that needs data from the store checks to see if the parts of the state they need have changed.
- Each component that sees its data has changed forces a re-render with the new data, so it can update what's shown on the screen

Source for getting data :https://docs.thedogapi.com/api-reference/breeds/breeds-list

Call API and get data from RTK (redux toolkit) and set into the Table.
 