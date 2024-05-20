import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Container from './components/container/Container'
import RecipesPage from './pages/RecipesPage'
import RecipeDetailedPage from './pages/RecipeDetailedPage'

function App() {
    const queryClient = new QueryClient()
    const browserRouter = createBrowserRouter([{
        element: <Container />,
        children: [
            {
                path: '/',
                element: <RecipesPage />,
            },
            {
                path: '/:link',
                element: <RecipeDetailedPage />,
            }
        ]
    }])

    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={browserRouter} />
        </QueryClientProvider>
    )
}

export default App