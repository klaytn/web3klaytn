from base.testing import KlaytnBaseTesting


class TestGovernanceVote(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.key = "governance.governancemode"
        self.value = "ballot"

    def test_post(self):
        self.response = self.w3.governance.vote(
            self.key, self.value
        )
        self.assertResponseSuccess()
