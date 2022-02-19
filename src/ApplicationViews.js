import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from './components/animal/AnimalList.js'
import { LocationCard } from "./components/location/LocationCard"
import { CustomerCard } from "./components/customer/CustomerCard"
import { EmployeeCard } from "./components/employee/EmployeeCard"
import { AnimalDetail } from "./components/animal/AnimalDetail"
import { AnimalForm } from './components/animal/AnimalForm'
import { LocationForm } from './components/location/LocationForm'
import { OwnerForm } from './components/customer/OwnerForm'
import { EmployeeForm } from './components/employee/EmployeeForm'
import { Login } from './components/auth/Login'
import { Register } from './components/auth/Register'
import { AnimalEditForm } from './components/animal/AnimalEditForm'


//Where ROUTES are KEPT


export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {
    
    const PrivateRoute = ({ children }) => {
        return isAuthenticated ? children : <Navigate to="/login" />;
    }
  
    const setAuthUser = (user) => {
      sessionStorage.setItem("kennel_customer", JSON.stringify(user))
      setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
    }





    return (
        <>
            <Routes>
                
                <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />

                <Route exact path="/register" element={<Register />} /> 

                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={
                    <PrivateRoute>
                    <Home />
                    </PrivateRoute>} />

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route exact path="/animals" element={
                <PrivateRoute>
                    <AnimalList />
                </PrivateRoute>} />

                <Route exact path="/animals/:animalId" element={
                <PrivateRoute>
                    <AnimalDetail />
                </PrivateRoute>
                } />
                {/*
                    This is a new route to handle a URL with the following pattern:
                    http://localhost:3000/animals/1
                    It will not handle the following URL because the `(\d+)`
                    matches only numbers after the final slash in the URL
                    http://localhost:3000/animals/jack
                    */}


                {/* Render the location list when http://localhost:3000/locations */}
                <Route path="/locations" element={
                <PrivateRoute>
                    <LocationCard />
                </PrivateRoute>
                } />

                {/* Render the customer list when http://localhost:3000/customers */}
                <Route path="/customers" element={
                <PrivateRoute>
                    <CustomerCard />
                </PrivateRoute>
                } />

                {/* Render the employee list when http://localhost:3000/employees */}
                <Route path="/employees" element={
                <PrivateRoute>
                    <EmployeeCard />
                </PrivateRoute>
                } />

                <Route path="/animals/create" element={
                <PrivateRoute>
                    <AnimalForm />
                </PrivateRoute>
                } />

                <Route path="/animals/:animalId/edit" element={
                <PrivateRoute>
                    <AnimalEditForm />
                </PrivateRoute>
                } />


                <Route path="/location/create" element={<LocationForm />} />

             
                <Route path="/owner/create" element={<OwnerForm />} />

                
                <Route path="/employee/create" element={<EmployeeForm />} />




            </Routes>
        </>
    )
}