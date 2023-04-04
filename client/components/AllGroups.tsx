import { Group } from '../../models/group'

export default function AllGroups() {
  // later groups is a prop - if we wanted to map data to a component?
  const groups: Group[] = [
    { id: 1, name: 'friendChips', image: 'fries-darkgray.png' },
    { id: 2, name: 'The fast and the curious', image: 'car-darkgray.png' },
  ]

  // With Redux but without Thunks Actions - HAVE TO WRITE SIMPLE ACTIONS FIRST
  // useEffect(() => {
  //   fruitsApi.getFruits()
  //     .then(fruits => {
  //       dispatch(setFruitsSuccess(fruits))
  //     })
  //     .catch(err => {
  //       dispatch(setError(err.message))
  //     })
  // }, [dispatch])

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
