import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchGroups } from '../actions/groups'

export default function AllGroups() {
  const {
    loading,
    error,
    data: groups,
  } = useAppSelector((state) => state.groups)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchGroups())
  }, [dispatch])

  return (
    <div className="flex bg-blue-200 justify-center h-full p-6 pb-60">
      {error && <p>There was an error</p>}
      {loading && (
        <img
          role="status"
          src="./images/loading/Hour-Glass.gif"
          alt="loading-hourglass"
        />
      )}
      <h1 className="absolute pb-2">Groups</h1>
      <div className="flex m-7 h-fit w-fit flex-wrap p-3">
        {groups.map((group) => (
          <div
            role="gridcell"
            key={group.id}
            className="bg-white m-3 p-2 flex flex-col content-center justify-between h-40 w-40 border-2 border-black cursor-pointer"
          >
            <div className="bg-red-300 rounded-full h-24 w-24 flex justify-center p-2 ml-5">
              <img
                src={`./images/icons/${group.image}`}
                alt={group.image}
                className="w-20 h-20"
              />
            </div>
            <p className="mt-1">{group.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
