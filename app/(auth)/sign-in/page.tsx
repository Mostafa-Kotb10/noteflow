import SignUpPage, { SignInForm } from "./sign-in-form";

function Page() {
    return (
        <section>
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <SignInForm />
            </div>
        </section>
    )
}

export default Page;