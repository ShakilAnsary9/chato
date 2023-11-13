"use client";
interface Props {
  user: {
    id: string;
    objectId: string;
  };
}

const AccountProfile = ({ user, btnTitle }: Props) => {
  return <div>Account Profile</div>;
};

export default AccountProfile;
