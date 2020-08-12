import React, { useState } from 'react'
import SearchForm from 'components/SearchForm'
import UseFetchJobs from 'components/UseFetchJobs'
import { Container } from 'react-bootstrap'
import Job from 'components/Job'
import 'App.css'
import Spinner from 'components/Spinner'
import JobsPagination from 'components/JobsPagination' 
import ErrorDisplay from 'components/ErrorDisplay'

function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { jobs, loading, error, hasNextPage } = UseFetchJobs(params, page)

  function handleParamChange(e) {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }

  var getJobs = jobs.map(job => {
    return <Job key={job.id} job={job} />
  })

  return (
    <Container className="my-4">
      <h1 className="mb-4 head">Github Jobs</h1>
      <SearchForm params={params} onParamChange={handleParamChange} />
      {loading ? <Spinner /> : error ? <ErrorDisplay /> : (
        <>
          <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
          {getJobs}
          <div style={{marginTop: '1.5rem'}}>
            <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
          </div>
        </>
      )}
    </Container>
  );
}

export default App;
