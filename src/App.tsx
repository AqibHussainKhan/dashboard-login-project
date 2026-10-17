import { useState } from 'react'
import './App.css'


function App() {
  // Task 1
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // Task 2
  const [hasNotification, setHasNotification] =
    useState<boolean>(true);

  // Task 3
  const [isOnline, setIsOnline] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#f7f8fc] text-[#182033]">

      {/* ================= NAVBAR ================= */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6 md:px-8">

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#6257e8] text-lg font-bold text-white shadow-lg shadow-[#6257e8]/20">
            M
          </div>

          <div>
            <h1 className="font-bold tracking-tight">
              MyDay
            </h1>

            <p className="text-xs text-gray-400">
              Personal Dashboard
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm md:flex">

          <span
            className={`h-2.5 w-2.5 rounded-full ${
              isOnline ? "bg-emerald-500" : "bg-gray-300"
            }`}
          />

          <span className="text-sm font-medium text-gray-500">
            {isOnline ? "Online" : "Offline"}
          </span>

        </div>

      </nav>

      {/* ================= MAIN ================= */}
      <main className="mx-auto max-w-6xl px-5 pb-12 md:px-8">

        {/* ================= HERO ================= */}
        <section className="mb-8 rounded-[28px] bg-[#6257e8] p-7 text-white shadow-xl shadow-[#6257e8]/10 md:p-10">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">

            <div>

              <p className="mb-3 text-sm font-medium text-white/70">
                YOUR DASHBOARD
              </p>

              <h2 className="max-w-xl text-3xl font-bold leading-tight md:text-5xl">

                {isLoggedIn
                  ? "Welcome back! 👋"
                  : "Hello there! 👋"}

              </h2>

              <p className="mt-4 max-w-lg leading-7 text-white/75">
                Keep track of your account, notifications
                and connection status from one simple place.
              </p>

            </div>

            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-white/15 text-5xl backdrop-blur-sm">
              ✨
            </div>

          </div>

        </section>

        {/* ================= CARDS ================= */}
        <section className="grid gap-5 md:grid-cols-3">

          {/* LOGIN CARD */}
          <div className="rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="mb-6 flex items-center justify-between">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eeeefd] text-xl">
                🔐
              </div>

              <span className="rounded-full bg-[#f4f3ff] px-3 py-1 text-xs font-semibold text-[#6257e8]">
                ACCOUNT
              </span>

            </div>

            <h3 className="text-xl font-bold">
              {isLoggedIn ? "Welcome Back!" : "Please Login"}
            </h3>

            <p className="mt-2 min-h-[48px] text-sm leading-6 text-gray-400">
              {isLoggedIn
                ? "Your account is active and ready to use."
                : "Login to access your personal dashboard."}
            </p>

            <button
              onClick={() => setIsLoggedIn(!isLoggedIn)}
              className="mt-6 w-full rounded-xl bg-[#182033] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#6257e8] active:scale-95"
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>

          </div>

          {/* NOTIFICATION CARD */}
          <div className="rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="mb-6 flex items-center justify-between">

              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff4e8] text-xl">

                🔔

                {hasNotification && (
                  <span className="absolute right-0 top-0 h-3 w-3 rounded-full border-2 border-white bg-orange-400" />
                )}

              </div>

              <span className="rounded-full bg-[#fff7ed] px-3 py-1 text-xs font-semibold text-orange-500">
                NOTIFICATION
              </span>

            </div>

            <h3 className="text-xl font-bold">
              Notifications
            </h3>

            {/* && OPERATOR */}
            {hasNotification && (
              <div className="mt-4 rounded-2xl bg-[#fff8ef] p-4">

                <p className="text-sm font-semibold text-[#9a5b13]">
                  You have a new notification
                </p>

                <p className="mt-1 text-xs text-[#b88950]">
                  Check your latest activity.
                </p>

              </div>
            )}

            {!hasNotification && (
              <div className="mt-4 rounded-2xl bg-gray-50 p-4">

                <p className="text-sm text-gray-400">
                  No new notifications
                </p>

              </div>
            )}

            <button
              onClick={() =>
                setHasNotification(!hasNotification)
              }
              className="mt-6 w-full rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition duration-300 hover:border-orange-300 hover:bg-orange-50 active:scale-95"
            >
              {hasNotification
                ? "Mark as Read"
                : "Show Notification"}
            </button>

          </div>

          {/* ONLINE CARD */}
          <div className="rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="mb-6 flex items-center justify-between">

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl text-xl ${
                  isOnline
                    ? "bg-emerald-50"
                    : "bg-gray-100"
                }`}
              >
                🌐
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  isOnline
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                STATUS
              </span>

            </div>

            <h3 className="text-xl font-bold">
              Connection
            </h3>

            <div className="mt-4 flex items-center gap-3">

              <span
                className={`h-3 w-3 rounded-full ${
                  isOnline
                    ? "bg-emerald-500"
                    : "bg-gray-300"
                }`}
              />

              <span
                className={`font-bold ${
                  isOnline
                    ? "text-emerald-600"
                    : "text-gray-500"
                }`}
              >
                {isOnline ? "Online" : "Offline"}
              </span>

            </div>

            <p className="mt-3 min-h-[48px] text-sm leading-6 text-gray-400">
              {isOnline
                ? "Your connection is active right now."
                : "You are currently offline."}
            </p>

            <button
              onClick={() => setIsOnline(!isOnline)}
              className={`mt-6 w-full rounded-xl px-5 py-3 text-sm font-semibold transition duration-300 active:scale-95 ${
                isOnline
                  ? "bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-500"
                  : "bg-emerald-500 text-white hover:bg-emerald-600"
              }`}
            >
              {isOnline ? "Go Offline" : "Go Online"}
            </button>

          </div>

        </section>

        {/* ================= BOTTOM INFO ================= */}
        <section className="mt-5 rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>
              <p className="text-xs font-semibold tracking-widest text-gray-400">
                QUICK OVERVIEW
              </p>

              <h3 className="mt-1 text-xl font-bold">
                Your current activity
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">

              <div className="rounded-xl bg-[#f7f7ff] px-4 py-3">
                <p className="text-xs text-gray-400">
                  Account
                </p>

                <p className="mt-1 text-sm font-bold text-[#6257e8]">
                  {isLoggedIn ? "Logged In" : "Guest"}
                </p>
              </div>

              <div className="rounded-xl bg-[#fff8ef] px-4 py-3">
                <p className="text-xs text-gray-400">
                  Alerts
                </p>

                <p className="mt-1 text-sm font-bold text-orange-500">
                  {hasNotification ? "1 New" : "Clear"}
                </p>
              </div>

              <div className="rounded-xl bg-[#effbf5] px-4 py-3">
                <p className="text-xs text-gray-400">
                  Network
                </p>

                <p className="mt-1 text-sm font-bold text-emerald-600">
                  {isOnline ? "Connected" : "Offline"}
                </p>
              </div>

            </div>

          </div>

        </section>

      </main>
    </div>
  );
}

export default App;