type BadgeProps = {
badge: "Remote" | "OnSite" | "Hybrid" 
};

const Badge = ({ badge }: BadgeProps) => {
    const badgeClass = {
        "Remote": "bg-blue-500",
        "Hybrid": "bg-green-500",
        "OnSite": "bg-purple-500",
  
    }
  return (
<span className={`px-2 py-1 ${badgeClass[badge]} text-white rounded-full`}>{badge}</span>  )
}

export default Badge    