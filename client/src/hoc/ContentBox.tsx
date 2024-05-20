function ContentBox({ children }: { children: React.ReactNode }) {
    return (
        <div className="px-12 py-6">
            {children}
        </div>
    )
}

export default ContentBox