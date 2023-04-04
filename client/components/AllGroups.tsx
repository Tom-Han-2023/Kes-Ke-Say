import { useEffect } from 'react'
import { Group } from '../../models/group'
import { useAppDispatch, useAppSelector } from '../hooks'

export default function AllGroups() {
  // later groups is a prop - if we wanted to map data to a component?
  const groups: Group[] = [
    { id: 1, name: 'friendChips', image: 'fries-darkgray.png' },
    { id: 2, name: 'The fast and the curious', image: 'car-darkgray.png' },
  ]

  const { loading, error, data } = useAppSelector((state) => state.groupsState)
  // Needs to match what's in our combineReducers when setting up this state ^^

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchGroups())
  }, [dispatch])

  return (
    <div>
      <h1>Groups</h1>
      {groups.map((group) => (
        <div key={group.id}>
          <h3>{group.name}</h3>
          <img
            src={`./images/icons/${group.image}`}
            alt={group.image}
            className="w-10 h-10"
          />
        </div>
      ))}
    </div>
  )
}
