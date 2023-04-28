from base.testing import KlaytnBaseTesting


class TestGovernanceVote(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.key = "governance.governancemode"
        self.value = "ballot"

    def test_post(self):
        governance_response = self.sdk.governance.vote(
            self.key, self.value
        )

        self.covert_response(governance_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        governance_response = self.sdk.governance.vote(self.value)

        self.covert_response(governance_response.response)
        self.assertResponseSuccess()
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
