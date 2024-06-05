import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AdminManageUsers = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: users,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/users");
      return data;
    },
  });

  const handleUpdateStatus = async (action, email) => {
    try {
      if (action === "Delete"){
       return Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then(async(result) => {
          if (result.isConfirmed) {
            await mutateAsync({ action, email });
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success"
            });
          }
        });
      }
      await mutateAsync({ action, email });
    } catch (error) {
      toast.error("Something Went Wrong");
    }
  };

  const { mutateAsync } = useMutation({
    mutationFn: async ({ action, email }) => {
      let updatedInfo = {};
      if (action === "Fraud") {
        updatedInfo = { status: "Fraud" };
        const { data } = await axiosSecure.patch(`/user/${email}`, updatedInfo);
        return data;
      } else if (action === "Admin" || action === "Agent") {
        updatedInfo = { role: action };
        const { data } = await axiosSecure.patch(`/user/${email}`, updatedInfo);
        return data;
      } else if (action === "Delete") {
        const { data } = await axiosSecure.delete(`/user/${email}`);
        return data;
      }
    },
    onSuccess: () => {
      refetch();
      toast.success("Successfully Updated Status");
    },
    onError: () => {
      toast.error("Something Went Wrong");
    },
  });

  // const handleDeleteUser = async (id) => {
  //   try{
  //     const
  //   }
  //   catch(error){
  //     toast.error('Something Went Wrong')
  //   }
  // }

  if (isPending) {
    return (
      <div className="flex items-center justify-center space-x-2 w-full min-h-screen">
        <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
      </div>
    );
  }

  return (
    <div className="w-full p-10 min-h-screen">
      <h1 className="text-xl text-[#18191C] font-medium mb-10">Manage Users</h1>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>User Name</th>
              <th>User Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
                <tr key={user?._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-16 h-16">
                          <img src={user?.photo} alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user?.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="text-sm opacity-80">{user?.email}</div>
                  </td>
                  <td>
                    {user?.role}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {user?.agent_email}
                    </span>
                  </td>
                  <th>
                    <div className="flex items-center gap-3 flex-wrap">
                      {user?.status !== "Fraud" ? (
                        <>
                          <button
                            onClick={() =>
                              handleUpdateStatus("Admin", user?.email)
                            }
                            className="bg-green-500 text-white px-2 py-1 rounded-md text-sm font-normal"
                          >
                            Make Admin
                          </button>
                          <button
                            onClick={() =>
                              handleUpdateStatus("Agent", user?.email)
                            }
                            className="bg-primary text-white px-2 py-1 rounded-md text-sm font-normal"
                          >
                            Make Agent
                          </button>
                          {user?.role === "Agent" && (
                            <button
                              onClick={() =>
                                handleUpdateStatus("Fraud", user?.email)
                              }
                              className="bg-yellow-500 text-white px-2 py-1 rounded-md text-sm font-normal"
                            >
                              Mark as Fraud
                            </button>
                          )}
                        </>
                      ) : (
                        <span className="text-red-500 font-medium text-sm border border-red-500 rounded-full px-3 py-1">
                          {user?.status}
                        </span>
                      )}
                      <button
                        onClick={() =>
                          handleUpdateStatus("Delete", user?.email)
                        }
                        className="bg-red-500 text-white px-2 py-1 rounded-md text-sm font-normal"
                      >
                        Delete User
                      </button>
                    </div>
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminManageUsers;
